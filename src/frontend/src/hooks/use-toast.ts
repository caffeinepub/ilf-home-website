import { useState, useEffect } from 'react';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
}

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 5000;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

type ToasterToast = Toast & {
  id: string;
};

const listeners: Array<(state: { toasts: ToasterToast[] }) => void> = [];

let memoryState: { toasts: ToasterToast[] } = { toasts: [] };

function dispatch(action: { type: string; toast?: ToasterToast }) {
  if (action.type === 'ADD_TOAST') {
    memoryState.toasts = [action.toast!, ...memoryState.toasts].slice(0, TOAST_LIMIT);
  } else if (action.type === 'REMOVE_TOAST') {
    memoryState.toasts = memoryState.toasts.filter((t) => t.id !== action.toast!.id);
  }
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

export function toast({ ...props }: Omit<ToasterToast, 'id'>) {
  const id = genId();

  const newToast: ToasterToast = {
    ...props,
    id,
  };

  dispatch({
    type: 'ADD_TOAST',
    toast: newToast,
  });

  setTimeout(() => {
    dispatch({ type: 'REMOVE_TOAST', toast: newToast });
  }, TOAST_REMOVE_DELAY);

  return {
    id,
    dismiss: () => dispatch({ type: 'REMOVE_TOAST', toast: newToast }),
  };
}

export function useToast() {
  const [state, setState] = useState<{ toasts: ToasterToast[] }>(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => {
      if (toastId) {
        const toastToRemove = state.toasts.find((t) => t.id === toastId);
        if (toastToRemove) {
          dispatch({ type: 'REMOVE_TOAST', toast: toastToRemove });
        }
      }
    },
  };
}

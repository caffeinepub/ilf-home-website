import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useGetGreeting(message: string) {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['greeting', message],
    queryFn: async () => {
      if (!actor) return '';
      return actor.getGreeting({ message });
    },
    enabled: !!actor && !isFetching && !!message,
  });
}

export function useDouble(x: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['double', x.toString()],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.double_(x);
    },
    enabled: !!actor && !isFetching,
  });
}

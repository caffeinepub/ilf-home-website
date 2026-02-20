import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

// This file contains React Query hooks for backend interactions.
// Currently, the backend has no methods, so no hooks are defined.
// Add custom hooks here as backend functionality is implemented.

// Example hook structure:
// export function useGetData() {
//   const { actor, isFetching } = useActor();
//
//   return useQuery({
//     queryKey: ['data'],
//     queryFn: async () => {
//       if (!actor) return [];
//       return actor.getData();
//     },
//     enabled: !!actor && !isFetching,
//   });
// }

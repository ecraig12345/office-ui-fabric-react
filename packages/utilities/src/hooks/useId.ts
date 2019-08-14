import { getId } from '../object';
import { useConst } from './useConst';

/**
 * Hook to generate a unique id in the global scope (spanning across duplicate copies of the same library).
 * @param prefix - Optional prefix for the ID
 */
export function useId(prefix?: string): string {
  return useConst(() => getId(prefix));
}

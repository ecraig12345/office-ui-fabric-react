import * as React from 'react';

/**
 * Hook to initialize and return a constant value.
 * This is similar to setting a private member in a class constructor.
 *
 * @param initialValue - Initial value, or function to get the initial value. Similar to `useState`,
 * only the value/function passed in the first time this is called is respected.
 */
export function useConst<T>(initialValue: T | (() => T)): T {
  const [value] = React.useState(initialValue);
  return value;
}

export function createSubscribable<T>() {
  let subscribers = new Set<(value: T) => void>();

  return {
    subscribe: (callback: (value: T) => void) => {
      subscribers.add(callback);

      return () => subscribers.delete(callback);
    },
    unsubscribe: (callback: (value: T) => void) => {
      subscribers.delete(callback);
    },
    publish: (value: T) => {
      subscribers.forEach((callback) => callback(value));
    },
    clear: () => {
      subscribers.clear();
    },
  };
}

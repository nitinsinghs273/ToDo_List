import { useEffect, useState } from "react";

export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const StoredItem = localStorage.getItem(key);
    return StoredItem ? JSON.parse(StoredItem) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );

  return [value, setValue];
}

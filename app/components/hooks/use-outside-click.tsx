import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (event: MouseEvent | TouchEvent) => void // Especifica los tipos de eventos
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => { // Especifica los tipos de eventos
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

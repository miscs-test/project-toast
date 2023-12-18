import { useEffect } from "react";

export function useEscKey(handle) {
  useEffect(() => {
    function handleEscKey(e) {
      if (e.key === "Escape") {
        // console.log("Esc key pressed");
        handle()
      }
    }

    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  })
}

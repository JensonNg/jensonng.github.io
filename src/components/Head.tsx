import { useEffect } from "react";

export function Head() {
  useEffect(() => {
    document.title = "Son Nguyen — Growth Marketing Strategist";
  }, []);
  return null;
}

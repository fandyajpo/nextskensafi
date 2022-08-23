import { useState, useEffect } from "react";

const useHeight = () => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [height, setHeight] = useState(window.innerHeight);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      function handleHeight() {
        setHeight(window.innerHeight);
      }
      window.addEventListener("resize", handleHeight);
    }, []);
    return height;
  } else {
    console.log("You are on the server");
  }
};

export default useHeight;

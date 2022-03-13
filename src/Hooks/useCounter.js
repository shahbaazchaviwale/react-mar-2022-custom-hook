import { useEffect, useState } from "react";

const useCounter = (sign = true) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const RUN = setInterval(() => {
      if (sign) {
        setCounter((prevCounter) => parseInt(prevCounter) + 1);
      } else {
        setCounter((prevCounter) => parseInt(prevCounter) - 1);
      }
    }, 1000);

    return () => {
      clearInterval(RUN);
    };
  }, []);

  return counter;
};

export default useCounter;

import useCounter from "../Hooks/useCounter";

const Forward = () => {
  const counter = useCounter();
  return <h1>{counter}</h1>;
};

export default Forward;

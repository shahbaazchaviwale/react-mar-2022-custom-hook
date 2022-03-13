import useCounter from "../Hooks/useCounter";

const Backward = () => {
  const counter = useCounter(false);
  return <h1>{counter}</h1>;
};

export default Backward;

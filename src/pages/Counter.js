import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValueHandler = Number(incrementAmount) || 0;

  const resetHandler = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>

      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValueHandler))}>
          Add Amount
        </button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;

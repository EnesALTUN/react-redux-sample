import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, TextField, Typography } from "@mui/material";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../../features/counter/counterSlice";

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
    <Box className="counter">
      <Typography>Count: {count}</Typography>
      <Box>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </Button>
      </Box>

      <TextField
        type="text"
        label="Increment Amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <Box>
        <Button
          variant="contained"
          onClick={() => dispatch(incrementByAmount(addValueHandler))}
        >
          Add Amount
        </Button>
        <Button variant="contained" onClick={resetHandler} color="error">
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;

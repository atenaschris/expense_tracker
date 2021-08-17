import { useEffect, useReducer, useState } from "react";

const useInput = (validateValue) => {
  const defaultInputstate = {
    value: "",
    isTouched: undefined,
    isValid: undefined,
  };

  const [error, setError] = useState(undefined);

  const inputReducer = (state, action) => {
    if (action.type === "SET_INPUT") {
      return {
        value: action.val,
        isTouched: true,
        isValid: validateValue(action.val),
      };
    }
    if (action.type === "BLUR_INPUT") {
      return {
        value: state.value,
        isTouched: true,
        isValid: state.isValid,
      };
    }
    return defaultInputstate;
  };

  const [inputState, dispatchInputstate] = useReducer(
    inputReducer,
    defaultInputstate
  );

  const { value, isValid, isTouched } = inputState;

  const changeInputHandler = (event) => {
    dispatchInputstate({ type: "SET_INPUT", val: event.target.value });
  };

  const blurInputHandler = () => {
    dispatchInputstate({ type: "BLUR_INPUT" });
  };

  const resetInput = () => {
    dispatchInputstate({ type: "INPUT" });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(!isValid && isTouched);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [isValid, isTouched]);

  return {
    value,
    isValid,
    error,
    changeInputHandler,
    blurInputHandler,
    resetInput,
  };
};

export default useInput;

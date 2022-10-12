import { useSelector, useDispatch } from "react-redux";
//useSelector 스토어가 관리하는 상태에 접근
//useDispatch 스토어에 액션을 전달

import { counterAction } from "../../store/reducer/counter";
//createSlice로 만들어진 리듀서는 자동완성으로 리듀서 내부의 함수를 알려줌
//type으로 전달할때 오타 등으로 인한 문제를 해결

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  //configureStore로 여러개의 리듀서를 합쳐서 state에는 여러개의 객체가 있음
  const counter = useSelector((state) => state.counter.counter);
  const view = useSelector((state) => state.counter.view);

  const reset = () => {
    // dispatch({ type: "reset" });
    dispatch(counterAction.reset());
  };

  const plus = (value) => {
    // dispatch({ type: "plus", value: value });
    dispatch(counterAction.plus(value));
  };

  const minus = (value) => {
    dispatch(counterAction.minus(value));
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {view && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={reset}>리셋</button>
        <button onClick={() => plus(1)}>1 증가</button>
        <button onClick={() => plus(5)}>5 증가</button>
        <button onClick={() => minus(1)}>1 감소</button>
        <button onClick={() => minus(5)}>5 감소</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

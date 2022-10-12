import { legacy_createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
//reduxjs/toolkit에 redux포함, 따로 redux설치
//여러개의 리듀서 함수를 사용하기위해 combineReducers 사용가능
//toolkit에서는 configureStore 제공, 여러개의 리듀서를 하나로 합침

import counterSlice from "./reducer/counter";
import authSlice from "./reducer/auth";
import cartSlice from "./reducer/cart";
import cartViewSlice from "./reducer/cartView";

//스토어 생성
//createSlice로 생성된 리듀서를 스토어에 등록하기 위해서는 .reducer 입력
// const store = legacy_createStore(counterSlice.reducer); > normal redux의 스토어 생성
const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    cart: cartSlice,
    cartView: cartViewSlice,
  },
  //reducers아님 주의

  //createSlice의 slice가 여러개가되면 객체를 만들어 사용
  //configureStore이 모든 리듀서를 하나의 큰 리듀서로 병합
  //하나만 사용시 reducer: counterSlice.reducer로 바로 전달
});

export default store;

//normal redux
// const counter = (state = counterState, action) => {
//   switch (action.type) {
//     //기존의 state를 절대 직접적으로 변화시켜서는 안됨
//     //예측 불가능한 동작이 발생하거나 디버깅이 어려워질 수 있음
//     // ex) state.counter++ > X
//     //항상 새로운 state 객체를 반환하여 재정의 해야됨
//     case "plus":
//       return {
//         counter: state.counter + action.value,
//         view: state.view,
//       };

//     case "minus":
//       return {
//         counter: state.counter - action.value,
//         view: state.view,
//       };

//     case "toggle":
//       return {
//         counter: state.counter,
//         view: !state.view,
//       };

//     case "reset":
//       return { counter: 0, view: state.view };

//     default:
//       return state;
//   }
// };

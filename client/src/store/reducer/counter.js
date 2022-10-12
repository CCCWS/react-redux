import { createSlice } from "@reduxjs/toolkit";

const counterState = { counter: 0, view: true };
//redux toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState: counterState, //초기값
  reducers: {
    //매개변수로 action이 필요없음, action에 따라 해당 메서드가 실행되기때문
    //if문이나 switch-case가 필요없음

    //실제로 state를 직접적으로 변화시키지는 않음
    //toolkit에서는 immer패키지를 사용하여 이러한 코드를 감지시 자동으로 원래 상태를 복제함
    //내부적으로 알아서 변경할 수 없는 코드로 변환시킴
    PostfixPlus(state) {
      state.counter++;
    },
    PostfixMinus(state) {
      state.counter--;
    },

    //추가적으로 action을 매개변수로 받아서 상용할 수도 있음
    plus(state, action) {
      //action으로 주는 매개변수는 payload라고 정해져있음
      state.counter = state.counter + action.payload;
    },

    minus(state, action) {
      state.counter = state.counter - action.payload;
    },

    toggle(state) {
      state.view = !state.view;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

export const counterAction = counterSlice.actions;
export default counterSlice.reducer;

import { createSlice, current } from "@reduxjs/toolkit";

//cartInit > 가장 먼저 서버에 있는 데이터를 불러올때 카트가 업데이트 되면서
//동시에 업데이트 함수가 함께 실행되는 문제가 발생함
//초기값을 true로 주어서 true일시 업데이트를 하지않게 조건으로 사용
const cartState = { cartList: [], totalQuantity: 0, cartInit: true };
const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    init(state, action) {
      state.cartList = action.payload.cart;
      state.totalQuantity = action.payload.totalQuantity;
    },

    add(state, action) {
      const newItem = action.payload;
      const itemCheck = state.cartList.find((data) => data.id === newItem.id);
      //이미 카드에 있는 아이템인지 확인
      state.cartInit = false;
      state.totalQuantity++;

      if (!itemCheck) {
        //itemCheck이 undifined일 경우 > 카트에 없음
        state.cartList.push(action.payload);
      } else {
        //itemCheck의 값이 있음 > 카트에 있음
        //state.cartList의 요소를 가르킴
        // console.log(current(itemCheck));
        itemCheck.quantity++;
        itemCheck.totalPrice = itemCheck.quantity * itemCheck.price;
      }
    },

    countAdd(state, action) {
      state.totalQuantity++;
      const itemCheck = state.cartList.find(
        (data) => data.id === action.payload
      );

      state.cartInit = false;
      itemCheck.quantity++;
      itemCheck.totalPrice = itemCheck.quantity * itemCheck.price;
    },

    countDown(state, action) {
      state.totalQuantity--;
      const itemCheck = state.cartList.find(
        (data) => data.id === action.payload
      );

      state.cartInit = false;
      itemCheck.quantity--;
      itemCheck.totalPrice = itemCheck.quantity * itemCheck.price;

      if (itemCheck.quantity === 0) {
        state.cartList = state.cartList.filter(
          (data) => data.id !== action.payload
        );
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;

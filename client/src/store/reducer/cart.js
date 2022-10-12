import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

import { cartViewAction } from "./cartView";

const cartState = { cartList: [], totalQuantity: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const itemCheck = state.cartList.find((data) => data.id === newItem.id);
      //이미 카드에 있는 아이템인지 확인

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

      itemCheck.quantity++;
      itemCheck.totalPrice = itemCheck.quantity * itemCheck.price;
    },

    countDown(state, action) {
      state.totalQuantity--;
      const itemCheck = state.cartList.find(
        (data) => data.id === action.payload
      );

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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendApi = async () => {
      dispatch(
        cartViewAction.setNotification({
          status: "send",
          title: "전송중",
          message: "데이터를 전송중입니다.",
        })
      );

      const res = await axios.post("/api/cart/add", { ...cart });

      if (!res.data.success) {
        dispatch(
          cartViewAction.setNotification({
            status: "fail",
            title: "실패",
            message: "데이터를 전송이 실패하였습니다.",
          })
        );
        throw new Error("장바구니 추가 실패");
      }
    };

    sendApi();

    dispatch(
      cartViewAction.setNotification({
        status: "success",
        title: "성공",
        message: "데이터를 전송이 성공하였습니다.",
      })
    );
  };
};

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;

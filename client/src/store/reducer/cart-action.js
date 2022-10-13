import axios from "axios";
import { cartViewAction } from "./cartView";
import { cartAction } from "./cart";

//카트에 물품이 변경될시 수행되는 thunk
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

      const res = await axios.post("/api/cart/add", {
        cartList: cart.cartList,
        totalQuantity: cart.totalQuantity,
      });

      if (!res.data.success) {
        dispatch(
          cartViewAction.setNotification({
            status: "fail",
            title: "실패",
            message: "데이터를 전송이 실패하였습니다.",
          })
        );
        throw new Error("장바구니 추가 실패");
      } else {
        dispatch(
          cartViewAction.setNotification({
            status: "success",
            title: "성공",
            message: "데이터를 전송이 성공하였습니다.",
          })
        );
      }
    };

    sendApi();
  };
};

//페이지에 처음 접속시 데이터를 가져오는 thunk
export const getCartData = () => {
  return async (dispatch) => {
    const getApi = async () => {
      const res = await axios.get("/api/cart/getCart");
      if (!res.data.success) {
        throw new Error("서버 에러");
      } else {
        dispatch(
          cartAction.init({
            cart: res.data.cart || [],
            totalQuantity: res.data.totalQuantity,
          })
        );
      }
    };

    getApi();
  };
};

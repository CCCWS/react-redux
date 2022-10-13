import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification ";
import { sendCartData, getCartData } from "../store/reducer/cart-action";

const ShopPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.cartView.notification);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    if (!cart.cartInit) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification notification={notification} />}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
};

export default ShopPage;

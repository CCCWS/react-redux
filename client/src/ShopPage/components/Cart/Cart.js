import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const view = useSelector((state) => state.cartView.view);
  return (
    <>
      {view && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartItem />
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;

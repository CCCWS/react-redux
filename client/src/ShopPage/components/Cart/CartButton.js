import { useSelector, useDispatch } from "react-redux";
import { cartViewAction } from "../../../store/reducer/cartView";

import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const view = () => {
    dispatch(cartViewAction.toggle());
  };

  return (
    <button onClick={view} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;

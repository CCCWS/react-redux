import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../../store/reducer/cart";

import classes from "./CartItem.module.css";

const CartItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartList);

  const onCount = (value, id) => {
    if (value === "+") {
      dispatch(cartAction.countAdd(id));
    }

    if (value === "-") {
      dispatch(cartAction.countDown(id));
    }
  };

  return (
    <>
      {cart.length === 0 ? (
        <div>Cart Empty</div>
      ) : (
        <>
          {cart.map((data) => (
            <li className={classes.item} key={data.id}>
              <header>
                <h3>{data.title}</h3>
                <div className={classes.price}>
                  {data.totalPrice.toLocaleString("ko-KR")}원{" "}
                  <span className={classes.itemprice}>
                    {data.price.toLocaleString("ko-KR")}원/개당
                  </span>
                </div>
              </header>

              <div className={classes.details}>
                <div className={classes.quantity}>
                  <span>{data.quantity}개</span>
                </div>
                <div className={classes.actions}>
                  <button onClick={() => onCount("-", data.id)}>-</button>
                  <button onClick={() => onCount("+", data.id)}>+</button>
                </div>
              </div>
            </li>
          ))}
        </>
      )}
    </>
  );
};

export default CartItem;

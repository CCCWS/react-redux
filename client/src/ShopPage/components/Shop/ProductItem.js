import { useDispatch } from "react-redux";
import { cartAction } from "../../../store/reducer/cart";

import Card from "../UI/Card";
import { item } from "./Items";
import classes from "./ProductItem.module.css";

const ProductItem = () => {
  const dispatch = useDispatch();

  const addCart = async (data) => {
    dispatch(
      cartAction.add({
        ...data,
        quantity: 1,
        totalPrice: data.price,
      })
    );
  };
  return (
    <li className={classes.item}>
      {item.map((data) => (
        <Card key={data.id}>
          <header>
            <h3>{data.title}</h3>
            <div className={classes.price}>
              {data.price.toLocaleString("ko-KR")}원
            </div>
          </header>
          <p>{data.description}</p>
          <div className={classes.actions}>
            <button onClick={() => addCart(data)}>Add to Cart</button>
          </div>
        </Card>
      ))}
    </li>
  );
};

export default ProductItem;

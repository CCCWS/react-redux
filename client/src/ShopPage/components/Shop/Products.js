import { memo } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem />
      </ul>
    </section>
  );
};

export default memo(Products);

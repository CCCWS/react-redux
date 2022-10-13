const express = require("express");
const router = express.Router();

let CART = [];
let totalQuantity = 0;

router.post("/add", (req, res) => {
  try {
    CART = req.body.cartList;
    totalQuantity = req.body.totalQuantity;
    return res.status(201).json({ success: true });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
});

router.get("/getCart", (req, res) => {
  try {
    return res
      .status(201)
      .json({ cart: CART, totalQuantity: totalQuantity, success: true });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
});

router.get("/test", (req, res) => {
  console.log(CART);
  res.status(201).json(CART);
});

module.exports = router;

const express = require("express");

const ueserRouters = require("./routes/user-router");
const productRouter = require("./routes/products-router");
const shippingAddressRouter = require("./routes/shipping-router");
const app = express();
const cors = require("cors");
require("dotenv").config();

const connect = require("./configs/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("", productRouter);
app.use("", ueserRouters);
app.use("", shippingAddressRouter);

app.use("/", (req, res) => {
  res.json({ message: "Hello" });
});

const port = process.env.PORT || 3000;

app.listen(port, async function () {
  try {
    await connect();
    console.log(`listening on port ${port}`);
  } catch (err) {
    console.log(err);
  }
});

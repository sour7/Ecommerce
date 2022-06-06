const express= require('express')
require("./db.js")
const ueserRouters = require('./routes/user-router')
const productRouter= require("./routes/products-router")
const shippingAddressRouter= require("./routes/shipping-router")
const app= express()
const cors= require('Cors')


app.use(cors())
app.use(express.json())

app.use(productRouter)

app.use(ueserRouters)

app.use(shippingAddressRouter)



// app.listen(8000, async () => {
//     try {
//       await connect();
//       console.log("listening on port 8000");
//     } catch (err) {
//       console.error(err.message);
//     }
    
//   });
const port=8000||process.env.PORT;

app.listen(port, ()=>{
  console.log(`listening on port ${port}`)
})
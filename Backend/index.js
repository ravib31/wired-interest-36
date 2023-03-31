
const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const { connection } = require("./config/db");
const { productRouter } = require("./routes/products.routes");
const { auth } = require("./auth")
const cors = require("cors")
const { userRouter } = require("./user.routes");
const { CartproductRouter } = require("./routes/cartProducts.routes");


const app = express()
app.use(express.json()) //middleware
app.use(cors())


app.use("/user", userRouter)
app.use(auth)
app.use("/products", productRouter)
app.use("/products/cart", CartproductRouter)



app.listen(4500, async () => {
    try {
        await connection
        console.log("Server running on port 4500")

    } catch (error) {
        console.log({"msg": "Cannot to MongoDb"})
    }

    console.log(`Server running on port ${process.env.PORT}`)
})



const express = require("express");
const dotenv = require("dotenv");
const { auth } = require("./auth")
const { connection } = require("./config/db");
const { productRouter } = require("./routes/products.routes");
const { userRouter } = require("./user.routes")
const cors = require("cors")

dotenv.config()


const app = express()
app.use(express.json())
app.use(cors())
//app.use(auth)
app.use("/products", productRouter)

app.use("/user", userRouter)




app.listen(4500, async () => {
    try {
        await connection
        console.log("Server running on port 4500")

    } catch (error) {
        console.log({"msg": "Cannot to MongoDb"})
    }
})


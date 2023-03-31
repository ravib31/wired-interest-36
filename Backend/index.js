const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv");
const { auth } = require("./auth")
const { connection } = require("./config/db");
const { productRouter } = require("./routes/products.routes");
const { userRouter } = require("./user.routes")
const app = express()
app.use(express.json()) //middleware


app.use("/products", productRouter)

app.use(express.json())
app.use(cors())

app.use("/user", userRouter)
app.use(auth)



app.listen(4500, async () => {
    try {
        await connection
        console.log("Server running on port 4500")

    } catch (error) {
        console.log({"msg": "Cannot to MongoDb"})
    }
})



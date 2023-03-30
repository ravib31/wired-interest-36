
const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const { connection } = require("./config/db");
const { productRouter } = require("./routes/products.routes");

const app = express()
app.use(express.json()) //middleware


app.use("/products", productRouter)



app.listen(process.env.PORT, async () => {    
    try {
       await connection
       console.log("Connected to MongoDb");

const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { userRouter } = require("./user.routes")
const { auth } = require("./auth")
const app = express()
app.use(express.json())
app.use(cors())

app.use("/user", userRouter)
app.use(auth)

// app.get("/get",(req,res)=>{
//  res.send("Running")
// })

app.listen(4500, async () => {
    try {
        await connection
        console.log("Server running on port 4500")

    } catch (error) {
        console.log({"msg": "Cannot to MongoDb"})
    }

    console.log(`Server running on port ${process.env.PORT}`)
})

})


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
    } catch (error) {
      console.log({"msg" :"Cannot to MongoDb"})  
    }
    console.log(`Server running on port ${process.env.PORT}`)
})
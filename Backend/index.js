const express = require("express");

const app = express()
const { connection } = require("./config/db")

app.listen(4500,async () => {
    
    try {
       await connection
       console.log("Server running on port 4500")
    } catch (error) {
      console.log({"msg" :"Cannot to MongoDb"})  
    }
})
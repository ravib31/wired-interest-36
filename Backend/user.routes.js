const express = require("express")
const {UserModel} = require("./user.model")
const bcrypt = require('bcrypt');
const userRouter = express.Router()
var jwt = require('jsonwebtoken');


userRouter.post("/register", async (req, res) => {
    const {
        username,
        email,
        password,
        age,
        key,
        location,
        type
    } = req.body

    const user = await UserModel.find({email})

    if (user.length === 0) {
        try {
            bcrypt.hash(password, 2, async (err, hash) => {
                const userDetail = new UserModel({
                    username,
                    email,
                    password: hash,
                    age,
                    key,
                    location,
                    type
                })
                await userDetail.save()
                res.status(200).send({"msg": "User Registered"})
            });

        } catch (error) {
            res.status(400).send({"msg": error.message})
        }

    } else {
        res.status(400).send({"msg": "User already exist, please login"})
    }


})

userRouter.post("/login", async (req, res) => {
    const {username, password, key} = req.body
    try {
        const user = await UserModel.findOne({username, key})
        console.log("user", user)
        if (user) {
            bcrypt.compare(password, user.password, async (err, result) => {
                if (result) {
                    res.status(200).send({
                        "msg": "Login Successful",
                        "token": jwt.sign(
                            {
                                "USER_ID": user._id
                            },
                            'evaluation'
                        )
                    })

                } else {
                    res.status(400).send({"msg": "Wrong Password"})

                }
            });
        } else {
            res.status(400).send({"msg": "No User Found"})

        }
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})

module.exports = {
    userRouter
} 


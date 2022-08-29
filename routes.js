const login = require("../services/login")
const {makePayment} = require("../services/makePayment");
const register = require("../services/register")
const deleteUser = require("../services/deleteUser")
const allPayments = require("../services/allPayments")
const {payment} = require("../services/makePayment")
const singleClientPayment = require("../services/singleClientPayment")
const {changeCost} = require("../services/makePayment")

const express = require("express")

const router = express.Router()

router.get("/",(req,res)=>{
    res.send("Hello there");
})
//kiosk side api
router.post("/login",login);
router.post("/payment",makePayment);

router.get("/payment",payment);


router.post("/changeCost",changeCost)

router.get("/singleClientPayment/:id",singleClientPayment);

//administrator dashboard 
router.get("/allPayments",allPayments);

router.post("/register",register);
router.delete("/deleteUser/:id",deleteUser);



//view all payments

router.get("singleClientPayment/:id",singleClientPayment);

module.exports = router;
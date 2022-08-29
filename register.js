const connection = require("../models/models");
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');

async function register(res,req){
    

    const body = req.body;
    if(!(body.customerNumber && body.password)){
      return res.status(400).send({ message: "input fields cannot be empty" });
    }
    
  
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);
  const token = auth.generateAccessToken(body.customerNumber);
    try{
        let sql =`INSERT INTO useraccounts (customerNumber,passward) VALUES (${customerNumber},${password})`
    connection(sql,(err,data,fields)=>{
            if(err){
                throw err;
            }
            res.status(200).json({message:"account created"})
    })

    //   user.save()
    //       .then(()=> {res.status(200).json({ message: "account created",token})});
    }
    catch(err){
        console.log("inside register route "+err.message)
    }
}
module.exports = register;
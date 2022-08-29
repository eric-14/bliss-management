const connection = require("../models/models");
const bcrypt = require('bcrypt');
    
async function login(req,res){
    const body = req.body;
    let sql = `SELECT * FROM useraccounts WHERE customerNumber = ${body.customerNumber}`;
    connect.query(sql,(err,data,fields)=>{
        if(!data){
            res.json({message:"No such message"})
        }else{
            const validPassword = bcrypt.compare(body.password, data.password);
            if(validPassword){
                const token = auth.generateAccesToken(data.customerNumber);
                res.json({message:"Valid password",token:token, customerNumber:data.customerNumber,role:data.role});
            }else(
                res.json({message:"Invaid pasword"}).status(400)
            )
        }
        
        
    })}
    // else{
    //     res.status(401).json({error:"User does not exist"})
//     //const user = await User.findOne({ email: body.email });
//     if (user) {
//       // check user password with hashed password stored in the database
//       const validPassword = await bcrypt.compare(body.password, user.password);
//       if (validPassword) {
//         const token = auth.generateAccessToken(user.email);
//         const id = (user.id);
//         res.status(200).json({ message: "Valid password", token:token, user:id});
//       } else {
//         res.status(400).json({ error: "Invalid Password" });
//       }
//     } else {
//       res.status(401).json({ error: "User does not exist" });
//     }
//   }

 
module.exports = login
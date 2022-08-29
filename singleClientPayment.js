const connect = require("../models/models");

async function singleClientPayment(req,res){
    let customerNumber= req.params.id
   
    const reg= /\w*/

    try{
        if(!reg.test(customerNumber)){
            throw err;
        }
        let sql = `SELECT * FROM payments WHERE customerNumber = ${customerNumber}`;

        connect.query(sql,(err,data,field)=>{
            if(err){
                console.log("In single payment errors "+err.message);
                throw err;
            }
            res.json(data).status(200);
        })
    }catch(err){
        console.log(err.message)
    }
  

}
module.exports = singleClientPayment
const connection = require("../models/models");



let sql = "SELECT * FROM payments"
async function allPayments(req,res){
    try{
        connection.query(sql,(err,data,fields)=>{
            if(err){
                throw err;
            }
           
            res.json(data).status(200)
          
           // console.log("line 20 in allPayments "+ data)
            
           })
        
        
        
    
    }catch(err){
        console.log("All payments "+err.message);
    }
    
}

module.exports = allPayments;
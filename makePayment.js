const connect = require("../models/models");
//const { connect } = require("../routes/routes");

//variable representing the cost of milk per litre


let costPerLitre = 80;

let customerName;
let customerNumber;
let numberOfLitres;
let amountPaid;
//Add date


async function makePayment(req,res){
    
   
    try{
        customerName = req.body.customerName;
        customerNumber = req.body.customerNumber;
        numberOfLitres = req.body.numberOfLitres;
        amountPaid = req.body.amountPaid;

        const reg= /\w*/;
        if(!reg.test(customerName) | !reg.test(customerNumber) | !reg.test(numberOfLitres) | !reg.test(amountPaid))
        {
            res.send("Wrong Input").status(500);
        }
        if(!customerName | !customerNumber | !amountPaid | !numberOfLitres){
            res.send("missing values").status(442);
        }

        let sqlPayments = `INSERT INTO payments (customerNumber,customerName, numberOfLitresBought, AmountOwed,amountPaid,Date) VALUES (${customerNumber},'${customerName}',${numberOfLitres},${numberOfLitres * costPerLitre},${amountPaid} ,NOW())`;

       // let sqlCustomerTable = `INSERT INTO customertable (customerNumber, customerName) VALUES (${customerNumber},'${customerName}')`;
        
        connect.query(sqlPayments,(err,result)=>{
            if (err) {
                console.log("Error in line 37 of of makePayment.js"+err.message);
                throw err;
            };
            // res.json({
            //     "customerNumber":customerNumber})
            console.log("Database updated")
            
        })
        // connect.query(sqlCustomerTable,(err,result)=>{
        //     if(err) {
        //         console.log("Error in line 45 of of makePayment.js "+err.message);
        //         throw err; 
        //     }
        //         console.log("Database updated")
        // })
    }catch(err){
        console.log("error in make payments module "+ err.message);
    }
    
    
   
    res.send("Everything Okay").status(200);
}
const payment=(req, res)=>{
    res.json({"costPerLitre":costPerLitre}).status(200);
}

const changeCost =(req,res)=>{
    costPerLitre= req.body.costOfMilk
    //console.log("new cost of milk "+costPerLitre)
    res.send("cost ipdated").status(200)
}
module.exports = {makePayment,payment,changeCost};
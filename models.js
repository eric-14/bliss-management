const mysql = require("mysql")

const connection = mysql.createConnection({
    host:"localhost",
    database:"customer_schema",
    user:"root",
    password:"root"
    
})

connection.connect((err)=>{
    if(err){
        console.log('error :'+ err);
        throw err;
    }

    console.log('Connected to the Mysql server inside models')
});

module.exports = connection;

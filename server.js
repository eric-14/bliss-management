const express = require("express")
const cors = require("cors");
const helmet = require("helmet");
const router = require("./routes/routes");
const errorhandler = require("./error/errorhandler")
const auth = require('./middleware/auth');
const {unless} = require('express-unless');
//const errors = require('./middleware/errors');

//const middleware = require("./middleware/middleware.js");
const app = express();
const port = process.env.PORT || 3000
auth.authenticateToken.unless = unless;
app.use(
   auth.authenticateToken.unless({
        path:[
            {url: "/api/register", methods: ["POST"]},
            {url: "/api/login", methods: ["POST"]},
            {url: "/api/allPayments", methods: ["GET"]}
        ],
   })
)





app.use(express.json())

app.use(helmet())
app.use(cors());
//app.use(middleware);

app.use("/api",router);


//handle any errors
//app.use(errorhandler);

app.listen(port,()=>{
    console.log(`Server listening on port     ${port}`);
})
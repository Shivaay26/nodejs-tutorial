const express =require('express')
var cors = require("cors");

const app =express();
const port=8000;

app.use(cors());
app.use(express.static('public'))

app.get('/', (req,res)=>{res.send("This data is being send from the node server")})

app.listen(port,()=>{console.log('this will be logged to the console')})


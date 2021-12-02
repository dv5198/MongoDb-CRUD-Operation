const express= require("express");
const bodyParser= require("body-parser");
const dotenv= require('dotenv')
const app = express();
app.use(bodyParser.json());
const port=3000;
dotenv.config({path:'./config/config.env'});
const connectDb= require('./config/db');
app.use('/',require('./routes/index'))
connectDb();

app.get('/', (req, res) => {
    res.send("hello")
});
app.get('/employees', (req, res) => {
    res.send("eployees") 
});
app.listen(port);
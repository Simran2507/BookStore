const express= require('express')
const app = express();
const bookRouter = require('./Router/bookRouter')
const connection = require('./Config/Connection')
const cors = require('cors')
require('dotenv').config()
app.use(cors());
connection();

app.get('/',(req, res) => {
    res.send("Server Runing on port 3000")
})

app.use(express.json());
app.use(bookRouter);
app.listen(4000,() => {
    console.log("Run server i'm sure")
})
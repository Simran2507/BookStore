const express= require('express')
const app = express();
const bookRouter = require('./Router/bookRouter')
const connection = require('./Config/Connection')
require("dotenv").config();

const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors());
connection();

app.get('/',(req, res) => {
    res.send(`Server Runing on port ${port}`)
})

app.use(express.json());
app.use(bookRouter);
app.listen(port,() => {
    console.log("Run server i'm sure")
})
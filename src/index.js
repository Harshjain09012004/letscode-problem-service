const express = require('express');
const { PORT } = require('./config/server.config');

const bodyParser = require('body-parser');
const apiRouter = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api',apiRouter);

app.get('/ping',(req,res)=>{
    res.json({message:"Server is working!"});
})

app.listen(PORT, ()=>{
    console.log(`Server Started At ${PORT}`);
})
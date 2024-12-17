const express = require('express');
const { PORT } = require('./config/server.config');

const bodyParser = require('body-parser');
const apiRouter = require('./routes');
const baseError = require('./errors/base.error');
const errorHandler = require('./utils/errorHandler');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api',apiRouter);

app.get('/ping',(req,res)=>{
    res.json({message:"Server is working!"});
})

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server Started At ${PORT}`);
    // throw new baseError("Base Error",501,"Unknown Error generated","Check the base error class");
})
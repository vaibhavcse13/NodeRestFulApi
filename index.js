import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose, { mongo } from 'mongoose';
import bodyParser from 'body-parser';

// define app 
const app =  express();
const PORT = 3000

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/crmdb');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app); // call crmRoutes 

//serving static file 
app.use(express.static('public'))
app.get('/' ,  (req , res) => 
    res.send(`Application is running at port ${PORT}`)
);

// listen port 
app.listen(PORT , () => console.log(`Application is running at port ${PORT}`));
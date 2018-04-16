import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;
const ContactSchema =  new Schema({
    firstName :{
        type:String,
        required : "Enter the first Name"
    },
    lastName : {
        type:String,
        required:"Enter the last name"
    }, email : {
        type:String,
        
    }, company : {
        type:String,
    }, phone : {
        type:Number,
        
    }, created_date : {
        type:Date,
        default : Date.now
    }
});

export default ContactSchema;
import mongoose from 'mongoose';
import  ContactSchema from '../model/crmModels';

const Contact = mongoose.model('contact' , ContactSchema);

export const addNewContact =  (req , res) => {
    let newContact =  new Contact(req.body);

    newContact.save((err,contact) => {
        if(err){
            res.send(err);
        }
        res.json(contact);
    })
}

export const getContact = (req , res) =>{
    Contact.find({} , (err , contact) =>{
        if(err){
            res.send(err);
        }else{
            res.json(contact);
        }
    });
};

export const getContactByID  = (req , res) =>{
    Contact.findById(req.params.contactId , (err , contact) =>{
        if(err){
            res.send(err);
        }else{
            res.json(contact);
        }
    })
};

export const updateContact = (req , res) => {
    
    Contact.findOneAndUpdate({_id:req.params.contactId } , req.body , {new:true} , (err , contact) => {
        if(err){
            res.send(err);
        }else{
            res.json(contact)
        }
    });
};

export const deleteContact = (req , res) => {
    Contact.remove({_id:req.params.contactId } , (err , contact ) => {
        if(err){
            res.send(err);
        }else{
            res.json({message : "The contact is successfully deleted "});
        }
    })
}
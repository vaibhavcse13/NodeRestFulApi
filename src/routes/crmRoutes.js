import {addNewContact ,
         getContact , 
         getContactByID ,
          updateContact , 
        deleteContact} from '../controller/crmController';

const routes = (app) => {
    app.route('/contact')
    .get((req, res , next) => {
        console.log(`req from : ${req.originalUrl}`);
        console.log(`req method : ${req.method}`);
        next();
    }, getContact
)
    .post(addNewContact);

    app.route('/contact/:contactId')
    //get By id
    .get(getContactByID)
    .put(updateContact)
    .delete(deleteContact);
}

// exporting the app 

export default routes;

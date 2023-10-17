import express, { Router } from "express";
import { User } from "../model/user.js";


 const router = express.Router();

//Route for save a new user

router.post('/', async (request,response) => {
    try{
       if(
           !request.body.name ||
           !request.body.weight ||
           !request.body.height ||
           !request.body.age ||
           !request.body.phone ||
           !request.body.password ||
           !request.body.email 
       ){
           return response.status(400).send({
               message :'Send all require fields : name,weight,height,age,phone,password,email',
           });
       }
       const newUser = {
           name: request.body.name,
           weight: request.body.weight,
           height: request.body.height,
           age: request.body.age,
           phone: request.body.phone,
           password: request.body.password,
           email: request.body.email,
       };
const user = await User.create(newUser);
return response.status(201).send(user);


    }catch (error){
       console.error(error.message);
       response.status(500).send({message: error.message});
    }
});

//Route to get all users from the database
router.get('/', async (request,response) => {
   try{
           
const users = await User.find({});
return response.status(200).json({
   count: users.length,
   data : users}
);

   }
   catch (error){
      console.error(error.message);
      response.status(500).send({message: error.message});
   }
});

//Route to get one user from the database by id
router.get('/:id', async (request,response) => {
   try{
           
const {id}= request.params;        
const user = await User.findById(id);
return response.status(200).json(user);

   }
   catch (error){
      console.error(error.message);
      response.status(500).send({message: error.message});
   }
});  

//Route for update a user
router.put('/:id', async (request,response) => {
   try{
      if(
          !request.body.name ||
          !request.body.weight ||
          !request.body.height ||
          !request.body.age ||
          !request.body.phone ||
          !request.body.password ||
          !request.body.email 
      ){
          return response.status(400).send({
              message :'Send all require fields : name,weight,height,age,phone,password,email',
          });
      }
      const {id}= request.params; 
       const result = await User.findByIdAndUpdate(id, request.body);

   if(!result){
   return response.status(404).json({message :'User not Found'});
           }
   return response.status(200).send({message :'User Updated Succesfully'});

   }
   catch (error){
      console.error(error.message);
      response.status(500).send({message: error.message});
   }
});

//Route for delete a user
router.delete('/user/:id', async (request,response) => {
   try{
      
      const {id}= request.params; 
       const result = await User.findByIdAndDelete(id);

   if(!result){
   return response.status(404).json({message :'User not Found'});
           }
   return response.status(200).send({message :'User Deleted Succesfully'});

   }
   catch (error){
      console.error(error.message);
      response.status(500).send({message: error.message});
   }
});

export default router;
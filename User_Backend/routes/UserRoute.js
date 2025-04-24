import express from "express";
import {
    getUsers,
    getUserById,
    saveUser,
    updateUser,
    deleteUser
  } from "../controllers/UserController.js";

const router = express.Router();// creating the router object 

router.get('/users',getUsers); // it will fetch all the users
  
  
router.get('/users/:id',getUserById) // this will fetch single userby passing the id in the URL 
router.post('/users',saveUser) // to create the new user 
router.patch('/users/:id',updateUser)// to update the existing user record
router.delete('/users/:id',deleteUser) // to delete the user record

export default router;
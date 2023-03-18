
import express from 'express'
import Resident from '../models/Resident.js'
import jwt from "jsonwebtoken"

import asynchandler from "express-async-handler"

// Residents
const create = asynchandler(async(req, res)=>{


  try{
    const posts = await Resident.create({
      fname: req.body.fname,
      lname: req.body.lname,
      cnic: req.body.cnic,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age
    })

    res.status(200).json({
      _id:posts._id,
      email:posts.email,
      token: generateToken(posts._id),

    })
  }catch(err){
    res.status(400)
    console.log(err)
  }
 

  
    
})
const login = asynchandler( async(req,res)=>{
  console.log(req.body.email)
  const posts = Resident.find({ email:req.body.email })

  res.status(201).json({
    
    token: generateToken(posts._id)

  })
})

const get = asynchandler(async(req, res)=>{
  if(req.Resident){
    res.status(200).json({
      _id:req.Resident._id,
      fname:req.Resident.fname,
      lname:req.Resident.lname,
      cnic:req.Resident.cnic,
      email:req.Resident.email,
      age:req.Resident.age,
    })
  }
  else{
    res.status(401)
    throw new Error('Not authorized')
  }
  


})


const getAll = asynchandler(async(req, res)=>{
  const posts = Resident.find({}, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send(posts)
    }
  })
})
const update = asynchandler(async(req, res)=>{
  console.log(req.body)
  const myquery = { _id:req.Resident }
  const newvalues = { $set: { fname: req.body.fname, lname: req.body.lname, password: req.body.password, email: req.body.email, age: req.body.age } }
  const posts = Resident.updateOne(myquery, newvalues, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send(posts)
    }
  })
})
const del = asynchandler(async(req, res)=>{
  const myquery = { _id:req.Resident }

  const posts = Resident.deleteOne(myquery, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send('Deleted')
    }
  })
})

const generateToken=(id)=>{
return jwt.sign({id},process.env.JWT_Token,{
  expiresIn:"30d",
})
}



export {
  create,
  get,
  getAll,
  update,
  del,
  login
}

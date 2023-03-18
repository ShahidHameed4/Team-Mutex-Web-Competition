import { Jwt } from "jsonwebtoken";
import UserInfo from "../models/UserInfo.js";
import userExperience from "../models/UserQualification";
import userSkills from "../models/UserSkills";
import asynchandler from "express-async-handler";

import userQualification from "../models/UserQualification.js";

const create = asynchandler(async (req, res) => {
    try {
        if(UserInfo.find({email:req.body.email})){
            res.status(301).json({
                message: "Email Already Exists",
            });

        }
        else{
            const posts = await UserInfo.create({
                name: req.body.name,
                city: req.body.city,
                bio: req.body.bio,
                role: req.body.role,
                imgLink: req.body.imgLink,
                email: req.body.email,
                password: req.body.password,
                mobile: req.body.mobile,
                });
            
                res.status(201);
        }
        
    } catch (err) {
        res.status(400);
        console.log(err);
    }
    }
);

const login = asynchandler( async(req,res)=>{
    console.log(req.body.email)
    const posts = UserInfo.find({ email:req.body.email })
  
    res.status(201).json({
      
      token: generateToken(posts._id)
  
    })
  })

const get = asynchandler(async (req, res) => {
    if (req.UserInfo) {


        var skills = userSkills.find({ userId: req.UserInfo._id });
        var experience = userExperience.find({ userId: req.UserInfo._id });
        var qualification = userQualification.find({ userId: req.UserInfo._id });
        res.status(200).json({
            _id: req.UserInfo._id,
            name: req.UserInfo.name,
            city: req.UserInfo.city,
            bio: req.UserInfo.bio,
            role: req.UserInfo.role,
            imgLink: req.UserInfo.imgLink,
            email: req.UserInfo.email,
            mobile: req.UserInfo.mobile,

            skills: skills,
            experience: experience,
            qualification: qualification,
        });
    } else {
        res.status(401);
    }
});





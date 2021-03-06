import passport from "passport";
import {Strategy, ExtractJwt} from "passport-jwt";
import dotenv from "dotenv";
import path from "path";
// import { prismaVersion } from "@prisma/client";

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

dotenv.config({path:path.resolve(__dirname,".env")});
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

const verifyUser = async(payload, done) => {
    try{
        const user = await prisma.user.findOne({id:payload.id})
        if(user !== null){
            return done(null, user);
        }else {
            return done(null, false);
        }
    }catch (e){
        return done(error,false)
    }
}
const authenticateJwt = (req,res,next) => passport.authenticate("jwt",{session:false},(error, user)=>{
    if(user){
        req.user=user;
    }
    next();
})(req,res,next);

passport.use(new Strategy(jwtOptions, verifyUser))
passport.initialize();
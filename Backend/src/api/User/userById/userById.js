import { prismaVersion } from "@prisma/client";

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
export default{
    Query:{
        userById: async(_, args)=>{
            const {id} = args;
            return await prisma.user.findOne({where:{id:id}});
        }
    }
};
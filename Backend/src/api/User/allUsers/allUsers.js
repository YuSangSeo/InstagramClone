const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
export default{
    Query:{
        allUsers:()=>prisma.user.findMany()
    }
};
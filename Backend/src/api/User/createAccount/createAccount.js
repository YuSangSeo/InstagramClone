const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default{
    Mutation: {
        createAccount: async(_,args)=>{
            const {username, email, firstName="", lastName="", bio=""} = args;
            const user = await prisma.user.create({data:{
                username,
                email,
                firstName,
                lastName,
                bio
            }});
            return user;
        }
    }
}
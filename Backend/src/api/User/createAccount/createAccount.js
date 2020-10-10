export default{
    Mutation: {
        createAccount: async(_,args,{prisma})=>{
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
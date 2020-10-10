import { generateToken } from "../../../utils";

export default {
    Mutation: {
        confirmSecret: async(_, args, {prisma}) => {
            const {email, secret} = args;
            const user = await prisma.user.findOne({where:{email}});
            if(user.loginSecret === secret){
                return generateToken(user.id);
            }else{
                throw Error("Wrong email/secret conviation")
            }
        }
    }
}
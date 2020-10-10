import {generateSecret} from "../../../utils";

export default{
    Mutation:{
        requestSecret:async(_, args,{prisma})=>{
            const {email} = args;
            const loginSecret = generateSecret();
            console.log(loginSecret);
            try{
                await prisma.user.update({data:{loginSecret},where:{email}})
                return true;
            }
            catch{
                return false;
            }
        }
    }
}
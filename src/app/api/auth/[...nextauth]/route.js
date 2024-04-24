import { loginService } from "@/service/auth.service";
import nextAuth from "next-auth"
import CredentailProvider from "next-auth/providers/credentials";

export const authOption = {
    providers:[
        //login by email and password
        CredentailProvider({
           async authorize(userInfo){
            console.log("user info in next auth:",userInfo);
            // console.log("hello");
            const newUserInfo = {
                email: userInfo.email,
                password: userInfo.password,
            };
            //call login services
            const login = await loginService(newUserInfo);
            return login;
           },
        }),
    ],
    callbacks: {
        async jwt({token, user}){
            return{...token,...user};
        },
        async session ({session, token}){
            session.user = token;
            return session;
        },
    },
};
const hander = nextAuth(authOption);
export {hander as GET,hander as POST};
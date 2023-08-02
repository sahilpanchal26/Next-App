import connect from "@/Utils/db"

import { NextResponse } from "next/server"
import bcrypt from "bcryptjs";
import User from "@/models/User";


export const POST = async (request : any , response : any) => {
const {name , email , password} =  await request.json()



await connect()

const hashPassword = await bcrypt.hash(password , 5)

const newUser = new User({
    name,
    email ,
    password : hashPassword
})

try{
    await newUser.save();
    return new NextResponse("User has been created" , {
        status : 200,
    })

}catch(err){
    return new NextResponse("problem in register api" , {
        status : 500,
    })
}
}
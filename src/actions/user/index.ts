"use server"
import {client} from '@/lib/prisma'
import { NextResponse } from 'next/server'

interface User{
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string
}

export const signIn = async(user: User)=>{
    try{
        const existingUser = await client.user.findUnique({
            where:{
                email: user?.email,
                number: user?.mobileNumber
            }
        })

        if(existingUser){
            return{
                message: existingUser,
            status: 200}
        }

        const saveUser = await client.user.create({
            data: {
                firstname: user?.firstName,
                lastname: user?.lastName,
                email: user?.email,
                number: user?.mobileNumber
            }
        })

        return {
            user: saveUser,
            status: 201
        }

    } catch(err){
        console.log(err);
        return{
            message: "Something went wrong",
            status: 500
        }
    }
}
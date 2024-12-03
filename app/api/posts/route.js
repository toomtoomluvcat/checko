import adminData from "@/app/model/posts";
import { dbconnect } from "@/app/lib/dbconnect";
import { NextResponse } from "next/server";
import { connect } from "mongoose";
import bcrypt from 'bcryptjs'

export async function POST(req) {
    try{
        await dbconnect();
        const {username,password} =req.json();
        const hashpassword = bcrypt.hash({password});
        await adminData.create({username,password:hashpassword})
    } catch (error){
        console.log('error', error)
    }
}
import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { getServerSession } from "next-auth";
import { genSaltSync, hashSync, compareSync } from "bcrypt";

const prisma = new PrismaClient();

export async function GET() {
    const session = await getServerSession();

    const user = await prisma.User.findMany();
    console.log(JSON.stringify(session?.expires) + "User is: " + JSON.stringify(user));

    //return NextResponse.json({
        // user: session?.user?.name,
        // email: session?.user?.email
    return NextResponse.json({
        message: "Signed Up",
        userId: user.id,
        username: user.username,
        password: user.password
     })
}

export async function POST(req: NextRequest) {

    //const session = await getServerSession();
    const data = await req.json();
    console.log("Client data is: " + data.user + " " + data.password);

    const hashpw = await bcrypt.hash(data.password,16);

    const user = prisma.User.create({
        data: {
            username: data.user,
            password: hashpw
        }
    });

    return NextResponse.json({
        message: "Signed Up", 
        userId: user.id,
        username: user.username,
        password: user.password
    })
}


export function PUT() {
    return NextResponse.json({
        user: "Rohit",
        email: "rohit@gmail.com"
    })
}


// Interview Ques: What is the diff b/w Default export function and Constant export function
// 			Ans:  Default export function: import <fnName> from "./src"
// 				  Constant export function: import {GET} from "./src"
/*
import Page from "./src"
export default function Page() {
    return <div>
        hi there...
    </div>
}
    */
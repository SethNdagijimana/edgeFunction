import { NextResponse } from "next/server"

export function middleware(req:any) {
    console.log("Hello from middleware")

    return NextResponse.next()
}
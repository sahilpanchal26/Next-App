import connect from "@/Utils/db"
import { NextResponse } from "next/server"
import Post from "@/models/Post"

export const GET = async (request : any) => {
    const url = new URL(request.url);

    const username = url.searchParams.get("username");

    const filter = username ? { username } : {};

    try {

        await connect()
        const posts = await Post.find(filter)
        return new NextResponse(JSON.stringify(posts), { status: 200 })

    } catch (err) {

        return new NextResponse("Database error", { status: 500 })
    }

} 

export const POST = async (request : any) => {
    const body = await request.json();
  
    const newPost = new Post(body);
  
    try {
      await connect();
  
      await newPost.save();
  
      return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };
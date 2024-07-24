import PostModel from "@/models/postModel"
import connectMongo from "@/utills/connectMongo"

export async function POST(req) {
 try {
       await connectMongo()
   const {title,description,image}=await req.json()
   const postData=await PostModel.create({title,description,image})
   return Response.json(postData)
 } catch (error) {
    return Response.json(error)
 }
  
}
import PostModel from "@/models/postModel";
import connectMongo from "@/utills/connectMongo";


export async function GET(request) {
    try {
        await connectMongo()
  const query=  request.nextUrl.searchParams.get('q')
  let postData
  console.log(query,'query value')
  if(query){
     postData=await PostModel.find({title:new RegExp(query,"i")})
  }else{
     postData=await PostModel.find({})
  }
        return Response.json(postData)
    } catch (error) {
        return Response.json(error)
    }
}


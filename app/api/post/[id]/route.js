import PostModel from "@/models/postModel";
import connectMongo from "@/utills/connectMongo";

export async function GET(req,{params}) {
    try {
        await connectMongo()
        const postData=await PostModel.findById({_id:params.id})
        return Response.json(postData)
    } catch (error) {
        return Response.json(error)
    }
}

export async function DELETE(req,{params}) {
    try {
        await connectMongo()
        const postData=await PostModel.findByIdAndDelete({_id:params.id})
        postData.save()
        return Response.json({message:"deleted done"})
    } catch (error) {
        return Response.json(error)
    }
}




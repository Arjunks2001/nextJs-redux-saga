"use client"
import { addPost } from "@/redux/action";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Contact() {
    const dispatch=useDispatch()
    const [data,setData]=useState({
        title:"",
        description:"",
        image:""
    })
    const handleChange=(e)=>{
        const value=e.target.value
        setData({
            ...data,
            [e.target.name]:value
        
         
        });
        
       
    }
    const handleSumbit=(e)=>{
        e.preventDefault();
       

        const postCard={
            title:data.title,
            description:data.description, 
            image:data.image
        }
         console.log(postCard)
        dispatch(addPost(postCard))
        setData({
            title:"",
            description:"",
            image:""
        })
     
    }
  
 
       
   
    return (
        <main class="container mx-auto px-4 py-6 mt-4">
        <h2 class="text-4xl font-bold mb-4">Add New Post </h2>
        <form class="w-full max-w-lg" onSubmit={handleSumbit}>
        <div class="d-flex items-center mb-4 ms-5">
                <label for="name" class="me-3"   >Title</label>
                <input type="name" id="name" class="border rounded px-2 py-1 w-3/4"name="title" value={data.title} onChange={handleChange}/>
            </div>
            <div class="d-flex items-center mb-4">
                <label for="text" class="me-3"   >Description</label>
                <input type="text" id="text" class="border rounded px-2 py-1 w-3/4"name="description"  value={data.description} onChange={handleChange}/>
            </div>
            <div class="d-flex items-center mb-4">
                <label for="text" class="me-3" >Image URL</label>
                <input type="text" id="text" class="border rounded px-2 py-1 w-3/4"  name="image" value={data.image}  onChange={handleChange}/>
            </div>
            <button class="bg-primary text-white border-white  fw-bold py-2 px-4 rounded" type="submit" >Submit</button>
        </form>
    </main>
    );
}

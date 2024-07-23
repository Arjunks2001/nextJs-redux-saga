"use client"
import { singleCard } from "@/redux/action"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default  function Post({params}) {

    const dispatch=useDispatch()
    const data=useSelector((state)=>state.card || [])
    // const [post,setPost]=useState([])

    const id =  params.id
console.log(id)
    useEffect(()=>{
      try {
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}`)
          .then((res)=>res.json())
          .then((res)=>dispatch(singleCard(res)) )
      } catch (error) {
        res.error
      }
    },[])
    return (
<>
        {data
         && <main class="container mx-auto px-4 py-6">
        <h2 class="text-4xl font-bold mb-4">{data.title}</h2>
        <p class="text-gray-500">Published on January 1, 2022</p>
        <img src={data.image} alt="Post Image" class="my-4"/>
        <p>{data.description}</p>
    </main>
}
    </>
    )

}
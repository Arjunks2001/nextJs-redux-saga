"use client"
import { post_cards} from "@/redux/action";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

 

export default function Home() {

  const dispatch = useDispatch()
  const data=useSelector((state)=>state.cardData ||[] )
  
  useEffect(()=>{
    dispatch(post_cards())
  },[])
 
  return (<>
    <main className="container mx-auto p-5">
   
        <h2 className="font-bold mb-4">Welcome to Our Blog  lorem </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </main>
    <div className="d-flex  px-4 container col-lg-6 mb-5">
    <input type="text" className="px-4 py-2 form-control rounded-3 me-3" placeholder="Search..."/>
    <button className="px-4 py-2 bg-primary text-white rounded-3">Search</button>
  </div>
    <div className="d-flex gap-4 container m-auto " >
    {
       data.map((items, index) => (
     <>
         <Link href={"/post/"+items._id}>
         <div className=" p-4 bg-white shadow-lg rounded-3" key={index}>
           <img className="w-100 h-48 object-cover mb-4" src={items.image} alt="Post Image"/> 
           <h5 className="text-xl font-semibold mb-2">{items.title}</h5>
           <p className="text-gray-600">{items.short_description}.</p>
         </div>
         </Link>
       </>
      ))
 }
 </div>
  </>);
}

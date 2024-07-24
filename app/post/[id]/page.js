"use client"
import {deleteSingleCard, singleCardId } from "@/redux/action"
import { useRouter } from "next/navigation"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default  function Post({params}) {
    const router=useRouter()
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.card || [])

  const handelDelete=()=>{
    dispatch(deleteSingleCard(id))
    router.push('/')

  }
    const id =  params.id
    useEffect(()=>{
    dispatch(singleCardId(id))
     
    },[])
    return (
<>
        {data
         && <div class="container mx-auto mt-5">
            <div className="row">
            <div  class="col-md-4 col-lg-3 ">
            <img className="w-100 rounded-3" src={data.image}></img>
               
            </div>
            <div className="col-md-8  ">
            <h4 class="card-title">{data.title}</h4>
            <p class="card-text">{data.description} </p>
          <div className="d-flex justify-content-end ">
          <button type="button" class="btn btn-primary me-3">Edit</button>
          <button type="button" class="btn btn-danger" onClick={handelDelete}>Delete</button>
          </div>
            </div>
            </div>
           
      
    </div>
}
    </>
    )

}
"use client"
import Pagination from "@/pagination/pagination";
import { post_cards, searchCards} from "@/redux/action";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

 

export default function Home() {
  const [searchValue,setSearchValue]=useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage= 3

  const handleSearch=(e)=>{

    e.preventDefault()
   console.log(searchValue);
   dispatch(searchCards(searchValue))
   setSearchValue('');
  }
 

  const dispatch = useDispatch()
  const data=useSelector((state)=>state.cardData ||[])
  
  useEffect(()=>{
    dispatch(post_cards())
  },[])

  const indexOfLastCard = currentPage * recordsPerPage;
  const indexOfFirstCard = indexOfLastCard - recordsPerPage;
  const currentPosts = data.slice(indexOfFirstCard, indexOfLastCard);
  const nPages = Math.ceil(data.length / recordsPerPage)
  // console.log("data",nPages)
 
  return (
    <>
      <main className="container mx-auto p-5">
        <h2 className="font-bold mb-4">Welcome to Our Blog lorem </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </main>
      <div className="d-flex  px-4 container col-lg-6 mb-5">
        <input
          type="text"
          className="px-4 py-2 form-control rounded-3 me-3"
          placeholder="Search..." value={searchValue}   
          onChange={(e) => setSearchValue(e.target.value)}
          
        />
        <button
          className="px-4 py-2 bg-primary text-white rounded-3"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {/* <div className="d-flex gap-4 container m-auto ">
        {data.map((items, index) => (
          <>
            <Link href={"/post/" + items._id}>
              <div className=" p-4 bg-white shadow-lg rounded-3" key={index}>
                <img
                  className="w-100 h-48 object-cover mb-4"
                  src={items.image}
                  alt="Post Image"
                />
                <h5 className="text-xl font-semibold mb-2">{items.title}</h5>
                <p className="text-gray-600">{items.short_description}.</p>
              </div>
            </Link>
          </>
        ))}
      </div> */}
      <div class="container ">
  <div class="row">
    {currentPosts.map((items,index)=>(
      <>
   
    
    <div class="card border-white shadow-lg col-lg-3 me-5 ms-lg-4 "  >
  <img src={items.image} class="card-img-top object-fit-cover mt-2" alt="..."/>
  <div class="card-body">
  <h5 class="card-title text-decoration-none">{items.title}</h5>
    <p class="card-text fw-lighter">{items.short_description}</p>
   
  </div>
  <Link type="button"href={"/post/" + items._id} key={index}  class="btn btn-outline-primary p-1 mb-3">View More</Link>
</div>
   
      </>
    ))}
  
    </div>
    </div>
    <div className='d-flex justify-content-center mt-4 '  role="button"  >
        <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    </>
  );
}

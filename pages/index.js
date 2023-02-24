import Image from "next/image"
import hero from "../public/assets/hero-png.png"
import logo from "../public/assets/logo.png"
import arrow from "../public/assets/arow.svg"
import Link from "next/link"
import Head from "next/head"
import favicon from "../public/favicon.ico"
import { Meta } from "../components/partials/Meta.jsx"
import { useState } from "react"
import axios from "axios"




export default function Home() {


  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const sub = async (e) => {
    e.preventDefault();
    
    try{
      const response = await axios.post("/api/waitlist", {
        email
      })
      if(response.data.message === "User pre-registered"){
        document.getElementById("lol").hidden = false;
        // wait for 30 seconds and then hide the error
        setTimeout(function(){ document.getElementById("lol").hidden = true; }, 3000);
        

      }else{
        document.getElementById("error").hidden = false;
        // wait for 30 seconds and then hide the error
        setTimeout(function(){ document.getElementById("error").hidden = true; }, 3000);

      }
      console.log(response)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
{/* popup */}
{/*  hide the popup unitl the button is */}

{/* create a div which can be hidden on button click and seen on button click */}


    
    <Meta
        title="work.space"
        description="work.space || Post your setups "
        keywords="setups, workstations, upvotes"
        image={logo}
        url="#"
      />

    <Head>
      {/* <title>work.space</title> */}
      <link rel="shortcut icon" href={favicon.src} />
    </Head> 
    <div className="Main">


      {/* nav bar */}

      <div role="alert" hidden id="error">
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    Something went wrong!
  </div>
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
    <p>You've already been added to the waitlist 😎</p>
  </div>
</div>

      <div id="lol"class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md " role="alert"  hidden  >
  <div class="flex">
    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p class="font-bold">Wailist Info:</p>
      <p class="text-sm">You've been successfully added to the waitlist 💖</p>
    </div>
  </div>
</div> 
      
    <span className="flex justify-center mt-[7rem]">
    <Image
      src={hero}
      height={326}
      width={1072}
      alt="Picture of the author"
    />
    </span>

    <span className="flex justify-center mt-[-23rem] md:flex justify center mt-[-23rem] sm:flex justify center mt-[-23rem]">
      <Image
      src={logo}
      height={96}
      width={96}
      />
    </span>

    <span className="Bunchoftext">
      
      <h1 className="font-satoshi font-medium text-base flex justify-center mt-[15rem]">Browse an extensive list of user workstations</h1>
      <h1 className="font-satoshi font-medium text-base flex justify-center text-slate-400">Find inspiration, start showcasing.</h1>
    </span>

    <span className="flex justify-center">

          <div>
            <input type="email" name="email" placeholder="bob@gmail.com" className="mt-[1.5rem] border-2 rounded-lg h-[50px] w-[279px] mr-[0.25rem] focus:outline-none focus:ring-2 focus:ring-slate-500 placeholder:text-left" required value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

      <button onClick={sub} className="bg-black text-white h-[50px] w-[182px] mt-[1.5rem] rounded-lg transition duration-150 ease-out hover:ease-in" >
        
        <span className="flex justify-center  font-semibold transition ease-in-out delay-150">
        
          Get Started
          <span>
        </span>
        <span className="ml-[0.40rem] mt-[0.30rem]">
        <Image 
          src={arrow}
          height={16}
          width={16}
          />

        </span>
        </span>
        </button>
    </span>

    <div>
      <span className="flex justify-center mt-[0.5rem] font-satoshi text-sm text-slate-500 font-semibold">❤️ Made by productive people, for productive people </span>
    </div>


    {/* Footer:) */}

    <div className="">
      {/* border (sperating the main content) */}
      <span>
      <hr className="mt-[1rem]" />
      </span>

      <span>
        <h2 className="text-black font-semibold font-satoshi text-[16px] flex justify-center mt-[2.5rem] ">work.space (2023)</h2>
        {/* copyright stoof */}

        <span>
        <h3 className="text-slate-500 font-satoshi flex justify-center mt-[0.25rem]">Copyright © 2023 work.space. All rights reserved.</h3>
      </span>

      </span>
      
    </div>

    </div>
     
  </>

   
         
  )
}

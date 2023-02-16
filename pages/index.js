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

  const sub = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("/api/waitlist", {
        email
      })
      if(response.data.message === "User pre-registered"){
        alert("Added you to the waitlist!")
      }else{
        alert("You are already in the waitlist/ You have entered an invalid email")
      }
      console.log(response)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
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

      
    <span className="flex justify-center mt-[10rem]">
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
            <input type="email" name="email" placeholder="bob@gmail.com" className="mt-[1.5rem] border-2 rounded-lg h-[50px] w-[279px] mr-[0.25rem] text-center " value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
      <buton onClick={sub} className="bg-black text-white h-[50px] w-[182px] mt-[1.5rem] rounded-lg transition duration-150 ease-out hover:ease-in">
        
        <span className="flex justify-center mt-[0.70rem] font-semibold transition ease-in-out delay-150">
        
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
        </buton>
    </span>

    <div>
      <span className="flex justify-center mt-[0.5rem] font-satoshi text-sm text-slate-500 font-semibold">❤️ Made by productive poeple, for productive people </span>
    </div>


    {/* Footer:) */}

    <div className="">
      {/* border (sperating the main content) */}
      <span>
      <hr className="mt-[1rem]" />
      </span>

      <span>
        <h2 className="text-black font-semibold font-satoshi text-[16px] m-[5.5rem] ">work.space (2023)</h2>
        {/* copyright stoof */}

        <span>
        <h3 className="text-slate-500 font-satoshi mt-[-4rem] ml-[4.9rem]">Copyright © 2022 work.space. All rights reserved.</h3>
      </span>

      </span>
      
    </div>

    </div>
     
  </>

   
         
  )
}

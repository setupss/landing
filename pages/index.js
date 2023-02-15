import Image from "next/image"
import hero from "../public/assets/hero-png.png"
import logo from "../public/assets/logo.png"
import arrow from "../public/assets/arow.svg"
import Link from "next/link"
import Head from "next/head"
import favicon from "../public/favicon.ico"
import { Meta } from "../components/partials/Meta.jsx"
export default function Home() {
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

      <nav className="flex justify-between mt-[1.5rem]">
        <span className="flex justify-center">
          {/* display the logo */}
          <Image
          className="ml-[2rem]"
          src={logo}
          height={96}
          width={96}
          />
        </span>
        </nav>
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
            <input type="text" placeholder="bob@gmail.com" className="mt-[1.5rem] border-2 rounded-lg h-[50px] w-[279px] mr-[0.25rem] text-center "/>
          </div>
      <buton className="bg-black text-white h-[50px] w-[182px] mt-[1.5rem] rounded-lg transition duration-150 ease-out hover:ease-in">
        
        <span className="flex justify-center mt-[0.70rem] font-semibold transition ease-in-out delay-150">
        
          <Link href="/get-started">Get Started</Link>
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
      <span className="flex justify-center mt-[0.5rem] font-satoshi text-sm text-slate-500 font-semibold">❤️ Made by productive poeple, for productive people</span>
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

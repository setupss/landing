import Image from "next/image"
import pc from "../public/assets/pc-hero.png"
import logo from "../public/assets/logo.png"
export default function login(){
    return(
        <>
        <div className="container">

        <div className="absolute inset-y-0 right-0  w-1/2 ">

          
          
          <span>
          <span className="flex justify-center">
            <Image
            src={logo}
            height={100}
            width={100}
            alt="Picture of the author"
            className="mt-[3.5rem]"
            />
          </span>

          <h1 className="flex justify-center mt-[3.5rem] font-poppins font-semibold text-[28px]">Create Your Account</h1>

          {/* Form area. */}

          <span className="flex justify-center mr-[20rem] mt-[5rem] font-satoshi">
            <h2>Email</h2>
          </span>
          <span className="flex justify-center mt-[rem] rounded-lg">
            
            <input type="email" required placeholder="bob@gmail.com" className="border-2 rounded-md border-slate-500 w-[360px] h-[48px] bg-grey-500" />
          </span>

          <span className="flex justify-center mr-[18rem] mt-[1.25rem] font-satoshi">
            <h2>Password</h2>
          </span>
          <span className="flex justify-center mt-[] rounded-lg">

            <input type="password" required placeholder="Password" className="border-2 rounded-md border-slate-500 w-[360px] h-[48px] bg-grey-500 " />
          </span>


          </span>

          


          </div>

          <div className="w-1/2">
            <Image
            src={pc}
            width="100%"
            height="100%"
            className="lg:w-full lg:h-screen md:w-1/2 md:h=screen sm:h-full sm:w-1/2 xs:h-full xs:w-1/2"
            />
          </div>

         
          
        </div>
        </>
    )
}
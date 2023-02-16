import logo from "../public/assets/logo.png"
import Image from "next/image"
import pc from "../public/assets/pc-hero.png"
export default function login(){
    return(
        <>
        <div className="absolute inset-y-0  ">
            <Image
            src={pc}
            height={800}
            width={800}
            alt="Picture of the author"
            />
        </div>



        <div className="main-login absolute inset-y-0 right-0 mr-[5rem] ">

            <span className="flex justify-center mt-[2.5rem]">
                <Image
                src={logo}
                height={100}
                width={100}
                alt="Picture of the author"
                />

            </span>
          <span className="flex justify-center mt-[2.5rem] font-semibold font-poppins font-medium text-[25px]">
            <h1>Create Your account</h1>
          </span>

          <span className="flex justify-center ml">
            <h3 className=" mr-[10.8rem]  mt-[2.5rem] font-inter">Signup</h3>
        <br />
          </span>
          <span className="flex justify-center ml-[7.5rem] mt-[1rem]">
            <input type="text" placeholder="email"  className="border-2 rounded-lg w-[360px] h-[48px] bg-slate-200"/>
          </span>
          {/* passw */}
          <span className="flex justify-center mr-[10.6rem] mt-[1.4rem]">
            <h3 className="font-inter ">password</h3>
           

          </span>
          <span className="flex justify-center ml-[7.5rem]">
                <input type="password" placeholder="password"  className="border-2 rounded-lg w-[360px] h-[48px] bg-slate-200"/>

            </span>

            <span className="flex justify-center">
                <button className=" absolute bg-[#007AFF] text-white font-inter font-semibold text-[15px] ml-[100px] mt-[2.5rem] w-[360px] h-[48px] rounded-lg">Sign In</button>
            </span>
         
            </div>
         
       



        </>
    )
}
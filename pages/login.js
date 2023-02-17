import logo from "../public/assets/logo.png"
import Image from "next/image"
import pc from "../public/assets/pc-hero.png"
export default function login(){
    return(
        <>
        <div className="container">

        <div className="absolute inset-y-0 right-0 border-4 border-red-700 w-1/2 ">
          
          <span>
          <h1 className="flex justify-center mt-[3.5rem]">Hello this is to be aligned to the left</h1>


          </span>

          


          </div>

          <div className="w-1/2 border-4 border-green-900">
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
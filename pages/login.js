import Image from "next/image"
import pc from "../public/assets/pc-hero.png"
import logo from "../public/assets/logo.png"
import { useCookies } from "react-cookie";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export default function login(){
  const [cookie, setCookie] = useCookies(["user"])
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);


  const login = async (e) => {
    e.preventDefault();
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });
      const data = response.data;
      if(response.data.message ==="User Found!"){
        alert("User Found!")
        setCookie("user", JSON.stringify(response.data.token), {
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
          sameSite: true,
        });
        router.push("/user/dashboard")


      }else{
        alert("Incorrect email or password")
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setState("ERROR");
      setErrorMessage(error.response.data.message);
    }
  };


    return(
        <>
        <div className="container ">

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

          <h1 className="flex justify-start mt-[3.5rem] font-inter font-semibold text-[28px] ml-[26%]">Nice to see you again</h1>

          {/* Form area. */}
          <div className="mt-[-2.5rem]">
          <span className="flex justify-center mr-[20rem] mt-[5rem] font-satoshi text-[#333333]">
            <h2>Email</h2>
          </span>
          <span className="flex justify-center mt-[rem] rounded-lg">
            
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" required placeholder="bob@gmail.com" className="border-2 rounded-md border-black w-[360px] h-[48px] bg-grey-500" />
          </span>

          <span className="flex justify-center mr-[18rem] mt-[1.25rem] font-satoshi text-[#333333]">
            <h2>Password</h2>
          </span>
          <span className="flex justify-center mt-[] rounded-lg">

            <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" required placeholder="Enter Password" className=" border-2 rounded-md border-black w-[360px] h-[48px] bg-grey-500 " />
          </span>

          <span className="flex justify-center">
          <button onClick={login} className="mt-[1.25rem] bg-[#007AFF] text-white font-poppins font-semibold w-[360px] h-[40px] rounded-lg">Sign in</button>

          </span>

          <span className="flex justify-center">
            <hr  className="mt-[2.5rem] w-[360px] "/>
            <br />

            
          </span>
          </div>
          <span className="mt-[0.25rem] flex justify-center mt-[4rem]">
              Already Have an,<span className="text-[#007AFF] ml-[0.25rem]"><p>Account?</p></span>
            </span>

          </span>
        
          </div>
          


          <div className="w-1/2">
            <Image
            src={pc}
            width="100%"
            height="100%"
            className="lg:w-full lg:h-screen md:w-auto md:h-screen sm:h-screen sm:w-auto "
            />
          </div>
         

         
          
        </div>
        </>
    )
}
import Image from "next/image"
import pc from "../public/assets/pc-2.png"
import logo from "../public/assets/logo.png"
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios"
export default function signup(){ 

  const router = useRouter();

  const [cookie , SetCookie] = useCookies(['user']);
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/signup", {
        email,
        password,
        name,
      });
      const data = response.data;
      console.log( "from the signup page:____" + data)
      console.log(data)
     
      if(response.data.message === "Data inserted!"){
        SetCookie("user", JSON.stringify(response.data.token), {
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
          sameSite: true,
        });

        router.push("/user/dashboard")
        alert(
        "New user created"
        )
      }else{
        router.push("/login")
        // alert("Something went wrong!")
      }
      setState("SUCCESS");
    } catch (error) {
      console.log(error);
      setState("ERROR");
      setErrorMessage(error.response.data.message);
    }
  };

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

          <span className="flex justify-center mt-[5rem] mr-[20rem] font-satoshi text-[#333333]">
            <h2>Name</h2>
          </span>
          <span className="flex justify-center  rounded-lg">
          <input type="name" required placeholder="bob" className="border-2 rounded-md border-black w-[360px] h-[48px] bg-grey-500"  value={name} onChange={(e) =>setName(e.target.value) }/>
          </span>



          <span className="flex justify-center mr-[20rem] mt-[0.25rem] font-satoshi text-[#333333]">
            <h2>Email</h2>
          </span>
          <span className="flex justify-center mt-[rem] rounded-lg">
            
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" required placeholder="bob@gmail.com" className="border-2 rounded-md border-black w-[360px] h-[48px] bg-grey-500" />
          </span>

          <span className="flex justify-center mr-[18rem] mt-[1.25rem] font-satoshi text-[#333333]">
            <h2>Password</h2>
          </span>
          <span className="flex justify-center mt-[] rounded-lg">

            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Enter Password" className="border-2 border-black rounded-md  w-[360px] h-[48px] bg-grey-500 " />
          </span>

          <span className="flex justify-center">
          <button onClick={handleSubmit} className="mt-[1.25rem] bg-[#007AFF] text-white font-poppins font-semibold w-[360px] h-[40px] rounded-lg">Create my account</button>

          </span>

          <span className="flex justify-center">
          <hr  className="mt-[2.5rem] w-[360px] "/>
            <br />
          </span>

          <span className="mt-[0.25rem] flex justify-center">
              Don't Have an<span className="text-[#007AFF] ml-[0.25rem]"><p>Account?</p></span>
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
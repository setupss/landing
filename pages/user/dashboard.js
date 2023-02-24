import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Cookies from 'js-cookie'

export default function dashboard() {
  const router = useRouter();
  const [username , setUsername] = useState("");
  async function lol(){
    var token = Cookies.get("user")
    console.log(token)

    
    const userFound = await axios.post('/api/user/get', {token});
    console.log(userFound.data);

    if(userFound.data.message === "Incorrect token"){
      console.log("Incorrect token")
    }else{
      setUsername(userFound.data.user.username);
      return userFound.data.user.username;
    }
  }

  const destroyCookie = () => {
    Cookies.remove("user");
    router.push("/login")
  }

  lol();
  return(
    <div>
      <h1>Hello {username}</h1>
    <button onClick={destroyCookie}>Logout</button>
    </div>
    
  )
}
// export  default async  function login() {
//   return(
//     <h1>Hey</h1>
//   )
//   // var token = Cookies.get("user")
//   // const userFound = await axios.post('/api/user/get', {token});
//   // console.log(userFound.data);
//   // if(userFound.data.message === "Incorrect token"){
//   //   router.push("/login")
//   // }else{
//   //   var usernme = userFound.data.user.username;
//   //   console.log(usernme)
//   //   return usernme;

//   // }
//   // return(
//   //   <>
//   //   <h1>Hey</h1>
//   //   </>
//   // )

// //   async function getUser() {
// //     const token = Cookies.get("user")

// //     const userFound = await axios.post('/api/user/get', {token});
// //     console.log(userFound.data);
// //     if(userFound.data.message === "Incorrect token"){
// //       router.push("/login")
// //     }else{
// //       console.log("hello world")
// //       // Fixed it. @bobby
// //       setUsername(userFound.data.user.username);
// //       return userFound;

// //     }
// //     // setUsername(userFound.data.user.username);
// //     // return userFound;


// }

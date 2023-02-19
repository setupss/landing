import Cookies from 'js-cookie'
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router";
import axios from "axios"
import { useState } from "react";

export default function dashboard(){
    const router = useRouter();

    let user = Cookies.get('user')
    const [username, SetUsername] = useState()

    async function getUser(token){
        const userFound = await axios.post('/api/user/get', {token});
        if(userFound.data.message === "Incorrect token"){
            console.log("INCORRET TOKEN")
        }else{
            SetUsername(userFound.data.user.username)
            return userFound;
        }

    }
    
    if(!user){
        return(
            <h1>NOT LOGGED IN</h1>
        )
        

    }else{
        user = JSON.parse(user)
        user = getUser(user.token)
        return(
         <h1>HEY? {username}</h1>
        )
    }

}
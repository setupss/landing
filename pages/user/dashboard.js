import Cookies from 'js-cookie'
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router";
import axios from "axios"
import { useState } from "react";

export default function dashboard(){
    const router = useRouter();

    let user = Cookies.get('user')
    if(!user){
        return(
            <>
            <h1>Not logged in</h1>
            </>

        )
        

    }else{
        return(
            <>
            <h1>Logged in</h1>
            </>
        )
    }

}
import React,{useState}from "react";
import { useEffect } from "react";


export default function Day8() {
    const[msg,setmsg]=useState("HELLO I AM SHREE....!!!!")
  
   useEffect(()=>{
        console.log('use Effect hook called..');
        setTimeout(()=>{
            setmsg("WELCOME YOU ALL...!!!!!");
        },2000)
    })
    return (
    <div><p>{msg}</p></div>
  )
}
import { useState } from "react"
import UserInput from "./UserInput";
///import { Data } from "./data";
export default function Controllar(){

    const[f,setF]=useState(0);
    const[s,setS]=useState(0);
    const[t,setT]=useState(0);
    const[l,setL]=useState(0);
     
   function firstChoice(){
     setF(f+1);  
   }
   function secondChoice(){
    setS(s+1); 
  }
  function thirdChoice(){
    setT(t+1); 
  }
  function lastChoice(){
    setL(l+1); 
  }
      const total=f+s+t+l;
     const storePercentage={
      first:((f/total)*100).toFixed(2),
      second:((s/total)*100).toFixed(2),
      third:(t/(total)*100).toFixed(2),
      last:(l/(total)*100).toFixed(2)
     }

 return <>
    <UserInput 
    percent={storePercentage}
    onselect1={firstChoice}
    onselect2={secondChoice}
    onselect3={thirdChoice}
    onselect4={lastChoice}
    />
    </>
}
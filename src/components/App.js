
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import img1 from "../assets/lambo.jpg"
import image2 from "../assets/img2.jpg"
import image3 from "../assets/img3.jpg"

let arr = [img1,image2,image3]
const App = () => {
let [index,setIndex] = useState(0)


useEffect(()=>{

  let x = setInterval(() => {
    setIndex(prev=> (prev+1 )%arr.length)
  }, 5000);

  return ()=>{
    clearInterval(x)
  }

},[arr.length])
 


  return (
    <div>
{<img src={arr[index]} height={600} width={400} />
    
  }</div>
  )
}

export default App

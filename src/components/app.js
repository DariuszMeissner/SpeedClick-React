import React, {useState} from "react";
import { Intro } from "./intro/Intro";
import { Settings } from "./Settings";


export const App = () => {
  const [start, setStart] = useState(false);


  const handleOnClick = () => {
    setStart(prev => !prev);
  }
  return (
    <>
      {(start) ? <Settings /> : <Intro onClick={handleOnClick}/>}
    </>
  )
  

};

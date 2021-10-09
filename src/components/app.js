import React, {useState} from "react";
import { Intro } from "./Intro";
import { Settings } from "./Settings";


export const App = () => {
  const [start, setStart] = useState(false);


  const handleOnClick = () => {
    setStart(prev => !prev);
  }
  return (
    <div>
      {(start) ? <Settings /> : <Intro onClick={handleOnClick}/>}
    </div>
  )
  

};

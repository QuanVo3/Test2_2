
import './App.css';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Shortener from './Components/Shortener';
import CBox from './Components/CheckBox/CBox';
import GLink from './Components/GeneratedLink/GLink';
function App() {
  const[Link,setLink] = useState(); 
  const[type,setType] = useState("");
  const[sLinks,setSLinks] = useState();
  let temp;
  useEffect(() => {
    axios({
      method: 'get',
      url: `https://api.shrtco.de/v2/shorten?url=${Link}//very/long/link.html`,
    })
      .then((data1) => {setSLinks(data1.data.result);console.log(sLinks.short_link)}) // console.log được nhưng chưa render ra màn hình được!
  }, [Link])
  
  return (
    <div>
      <Shortener
      setLink = {setLink}
      />
      <CBox
      setType = {setType}
      />
     <h1>{temp}</h1>
    </div>
  );
}

export default App;

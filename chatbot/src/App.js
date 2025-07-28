import Loginform from './components/Loginform';
import Chatbot from './components/Chatbot';
import { useState } from 'react';
import './app.css';


function App() {
   
 const [Isloginned , setisloginned] = useState(false)
const [userdetail , setuserdetail] = useState("")
   
  
     
  return (
    <div >
      {Isloginned ===false?<Loginform setisloginned={setisloginned}/>: <Chatbot setisloginned={setisloginned}/> }

     
    
    </div>
  );
}

export default App;

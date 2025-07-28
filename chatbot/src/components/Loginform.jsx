import React, { useState } from "react";
import Navbar from "./Navbar"; 


const Loginform = ({setisloginned,userdetail}) => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const expectedemail = "mohtasham@gmail.com"
  const expectedusername = "user123"
   
        
       function chechfuntion(e) {
         e.preventDefault()
        
        if(email===expectedemail && username===expectedusername){
            
              setisloginned(true);
            
        }else{
          alert("enter valid")
        }
       }
  return (
    <div>

        <Navbar email={email} username = {username}/>
      
      <form   onSubmit={chechfuntion}>
        <h2>login form</h2>
        <input
          type="text"
          value={username}
          onChange={(e)=> setusername (e.target.value)}
           
        />
        <input
          type="email"
          value={email}
          onChange={(e)=> setemail (e.target.value)}
         
        />
        <button type="submit">Login</button>
      </form>
     
    
    </div>
  );
};

export default Loginform;

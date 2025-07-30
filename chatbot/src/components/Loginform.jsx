import React, { useState } from "react";

const Loginform = ({ setisloginned, setuserdetail }) => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const expectedemail = "mohtasham@gmail.com";
  const expectedusername = "user";

  function chechfuntion(e) {
    e.preventDefault();

    if (email === expectedemail && username === expectedusername) {
      setuserdetail({ email, username });
      setisloginned(true);
    } else {
      alert("enter valid");
    }
  }

  return (
    <div>
      <form onSubmit={chechfuntion}>
        <h2>Login Form</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Loginform;
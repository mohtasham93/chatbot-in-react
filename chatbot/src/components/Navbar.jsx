import React from 'react'

const Navbar = ({email,username}) => {
  return (
    <div>
      <p> This is your username:{username}</p>
        <p> This is your email:{email}</p>
        
    </div>
  )
}

export default Navbar;
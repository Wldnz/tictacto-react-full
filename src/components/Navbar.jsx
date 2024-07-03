import React,{memo} from 'react'

export default memo(function Navbar() {
    console.log("Ini Navbar");
  return (
    <nav>
            <h2>Hello, Coder! </h2>
            <div className="menuPage">
                <p>Home</p>
                <p>About</p>
                <p>Service</p>
                <p>Contact</p>
            </div>
        </nav>
  )
})

import React, { useEffect } from 'react'
import './../CSS files/Navbar.css'
// import { CiLogin } from "react-icons/ci";
// import { FaUserPlus } from "react-icons/fa";
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Logouticon from "./../assets/Logouticon.png"
const Navbar = () => {
  const isLogedIn = localStorage.getItem('isLogin');
  const navigate = useNavigate();

  useEffect(() => {
    // isLogedIn && console.log(isLogedIn);
  })
  return (
    <div className='navbarcontainer'>
      <div className='navbar'>
        <div className='logo'>ChatApp</div>
        <ul className='navlinks'>
          {/* {!isLogedIn &&
            <>
            <Link to="/login"><li className='navlist'><CiLogin /> SignIn</li></Link>
            <Link to="/register"><li className='navlist'><FaUserPlus />SignUp</li></Link>
            </>
          } */}
          {isLogedIn && <>
          {/* <Link to="/chat"><li className='navlist'>Chat</li></Link> */}
          <button className='logoutbtn' onClick={() => {localStorage.removeItem('isLogin'); localStorage.removeItem('token'); navigate('/login');}} ><li className='navlist'>
          <img src={Logouticon} alt="Logo" width={50} />
            </li></button>
          </>
          }
        {/* <Link to="/login"><li className='navlist'><CiLogin />Sign In</li></Link>
        <Link to="/register"><li className='navlist'><FaUserPlus />Sign Up</li></Link>
        <Link to="/chat"><li className='navlist'>Join Chat</li></Link> */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar

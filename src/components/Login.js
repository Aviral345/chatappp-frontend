import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './../CSS files/Login.css';
import {useNavigate} from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [login, setLogin] = useState(false);
  //   const history = useHistory();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };


    try {
      const res = await axios.post('/api/auth/login', user);

      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('isLogin', "true");
      localStorage.setItem('userid',res.data.userId);
      // setLogin("loggedin");

      navigate('/chat');
        // history.push('/chat');
    } catch (err) {
      console.error('Login error', err);
    }
  };

  return (
    <div className="logincontainer">
      {/* <div className='borderupper'></div> */}
        <div className="logincard">
          <div className="loginpageimg">
            <img className='loginimg'
              src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
              alt="Avatar" width={"100px"} height={"100px"}
            />
          </div>
          <div className="loginformcard">
            <h1>Login</h1>
            <form className="loginform" onSubmit={handleLogin}>
              <input
                type="text"
                name="email"
                id="email"
                className="logininput"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                id="password"
                className="logininput"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin} className="loginbutton" type="submit">Login</button>

              <div className="redirectionpara">
                <p>Do you create Account <span><Link to="/register">Sign Up</Link></span></p>
              </div>
            </form>
          </div>
        </div>
      
      {/* <div className='borderlower'></div> */}
    </div>
  );
};

export default Login;

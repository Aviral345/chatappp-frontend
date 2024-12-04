import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './../CSS files/Register.css';
// import { useHistory } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()
  //   const history = useHistory();

  const handleRegister = async (e) => {
    const user = {
      username,
      email,
      password
    };


    e.preventDefault();
    try {
      const data = await axios.post('/api/auth/register', user);
      console.log(data);
      navigate("/login")
      setUsername("")
      setPassword("")
      setEmail("")
      //   history.push('/login');
    } catch (err) {
      console.error('Register error', err);
    }
  };

  return (
    <div className='registercontainer'>
      <div className="registercard">
        <div className="loginpageimg">
          <img className='loginimg'
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Avatar" width={"100px"} height={"100px"}
          />
        </div>
        <div className="registerformcard">
          <h1>Register</h1>
          <form className="registerform" onSubmit={handleRegister}>
            <input
              type="text"
              name='username'
              className='registerinput'
              id='username'
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              name='Email'
              className='registerinput'
              id='email'
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name='password'
              className='registerinput'
              id='password'
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='registerbtn' type="submit">Register</button>

            <div className="redirectionpara">
                <p>Have you already Account <span><Link to="/login">Sign In</Link></span></p>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

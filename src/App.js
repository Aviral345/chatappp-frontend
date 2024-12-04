import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home.js';
import Chat from './pages/Chat.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Navbar from './components/Navbar.js';
import ChatRoom from './components/ChatRoom.js';
import "./App.css";

function App() {
  return (
  <div className='mainrootbox'>
     <Router>
      <Navbar />
      {/* <Chat/> */}
      <Routes>
        <Route exact path="/chat" element={<Chat/>} />
        <Route path="/chatroom"  exact element={<ChatRoom/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  </div>
   
  );
}

export default App;













// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { MdEmojiEmotions } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import "./../CSS files/chat.css"

const ChatRoom = ({ chatdata }) => {
  const [data, setData]=useState ('')
  // setData(chatdata)
  // console.log(data);
  
  return (
    <>
      {/* <div className="chatsection">
          <div className="chatheadersection">
            <button className="logoandname">
            <div className="grouplogo">L</div>
            <div className="groupname">group 1</div></button>
            <div className="groupbar">
              <button className="gbar"><HiOutlineDotsVertical /></button>
            </div>
          </div>
          <div className="chatmessagesection">

          </div>
          <div className="chatinputsection">
            <button className="emogies"><MdEmojiEmotions /></button>
            <button className="links"><FaLink /></button>
            <input className='chatinput' type="text" placeholder='Type a message' />
            <button className='sendbutton'><IoMdSend /></button>
          </div>
        </div> */}
    </>
  );
};

export default ChatRoom;

import React, { useEffect, useState } from "react";
import "./speak.css";
import { Avatar, IconButton } from "@material-ui/core";
import { InsertEmoticon, } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from 'react-router-dom';
import db from '../firebase';
import {useStateValue} from "../StateProvider";


import VideoCallIcon from "@material-ui/icons/VideoCall";
import CallIcon from "@material-ui/icons/Call";
function Speak() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const {roomId} = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{user}, dispatch] = useStateValue();



  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("Hey you ", input);
    setInput("")
    }

    useEffect(()=>{
      if(roomId){
          db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
              setRoomName(snapshot.data().name);
          });
          db.collection('rooms').doc(roomId).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        });

          

      }
  },[roomId])



  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>Last view at ...</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <VideoCallIcon />
          </IconButton>

          <IconButton>
            <CallIcon />
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
                
      {messages.map(message => (
                    <p className={`chat_message ${ message.name === user.displayName && 'chat_receiver'}`}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_timestemp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                    </p>
                ))}
                
            </div>
      <div className="chat_footer">
      <MicIcon/>

        <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/>
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <InsertEmoticon/>

      </div>
    </div>
  );
}

export default Speak;

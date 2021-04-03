import React, { useEffect, useState } from "react";
import "./speak.css";
import { Avatar, IconButton } from "@material-ui/core";
import { InsertEmoticon, } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from 'react-router-dom';
import db from '../firebase';
import {useStateValue} from "../StateProvider";
import firebase from 'firebase';


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
    db.collection('rooms').doc(roomId).collection('messages').add({
        message: input,
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput("");
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
        <div className="mov">
        <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
        </div>
        <div className="chat_headerInfo">
        <h3 className='chat-room-name'>{roomName}</h3>
          <p className='chat-room-last-seen'>
                         {" "}
                        {new Date(
                            messages[messages.length - 1]?.
                            timestamp?.toDate()
                        ).toUTCString()}
                    </p>      
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
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="send a message..."/>
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <InsertEmoticon/>

      </div>
    </div>
  );
}

export default Speak;

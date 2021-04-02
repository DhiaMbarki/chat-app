import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./GroupSide.css";
import swal from "sweetalert";
import AddBoxIcon from "@material-ui/icons/AddBox";
import db from "../firebase";
import {Link} from 'react-router-dom';


function ChatSide({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");


  useEffect(() => {
    if(id){
        db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map((doc) => doc.data()))
        })
    }
}, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = swal("start your room chat here :)", {
      content: "input",
    }).then((roomName) => {
      if (roomName) {
        db.collection("rooms").add({
          name: roomName,
        });
      }
    });
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`} key={id}>
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
      <div className="sidebarChat_info">
        <h2>{name}</h2>
        <p>{messages[0]?.message}</p>
      </div>
    </div>
    </Link>

  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h3 className="add-new-chat-title">
        <AddBoxIcon />
      </h3>
    </div>
  );
}

export default ChatSide;

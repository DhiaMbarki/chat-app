import React, { useState, useEffect } from "react";
import "./leftbar.css";
import { Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import ChatSide from "../chats/ChatSide";
import db from "../firebase";

function Leftbar() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="">
          {" "}
          <Avatar />
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search" className="mov" />
        </div>
      </div>

      <div className="sidebar_chats">
        <ChatSide addNewChat />
        {chats.map((chat) => (
          <ChatSide key={chat.id} id={chat.id} user={chat.data.user} />
        ))}
      </div>
    </div>
  );
}

export default Leftbar;

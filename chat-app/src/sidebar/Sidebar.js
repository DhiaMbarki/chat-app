import React from "react";
import "./sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import {SearchOutlined} from "@material-ui/icons";
import ChatSide from "../chats/ChatSide";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
      
      </div>
      <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

      <div className="sidebar_chats">
          <ChatSide/>
        <h1>Chat</h1>
        <h1>Chat</h1>
        <h1>Chat</h1>
        <h1>Chat</h1>
        <h1>Chat</h1>
        <h1>Chat</h1>
        <h1>Chat</h1>
        <h1>Chat</h1>

      </div>
    </div>
  );
}

export default Sidebar;

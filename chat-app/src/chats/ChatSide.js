import React from "react";
import "./chat.css";
import { Avatar} from "@material-ui/core";

function ChatSide() {
  return (
    <div className="sidebarchat">
      <Avatar />
      <div className="sidebarChat-info">
          <h2>Room Name</h2>
          <p>Last message...</p>
      </div>
    </div>
  );
}

export default ChatSide;

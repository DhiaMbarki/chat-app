import React, {useState,useEffect} from 'react';
import "./leftbar.css";
import { Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import ChatSide from "../chats/ChatSide";
import db from '../firebase';


function Leftbar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setRooms(
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
        {rooms.map((room) => (
          <ChatSide key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Leftbar;

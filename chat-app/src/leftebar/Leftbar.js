import React, { useState, useEffect } from "react";
import "./leftbar.css";
import { Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import ChatSide from "../groupMember/GroupSide";
import db from "../firebase";
import { useStateValue } from '../StateProvider';


function Leftbar() {
   const [rooms, setRooms] = useState([]);
  const [{user},dispatch] = useStateValue();

  useEffect(() => {
      const dumb = db.collection('rooms').onSnapshot(snapshot => (
          setRooms(snapshot.docs.map(doc => (
              {
                  id: doc.id,
                  data: doc.data()
              }
          )

          ))
      ));

      return () => {
          dumb();
      }
  },[]); 


  


  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="move">
          
          <Avatar src={user?.photoURL} />
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
        {rooms.map(room=> (
                    <ChatSide key={room.id} id={room.id} name={room.data.name}/>
                ))}
      </div>
    </div>
  );
}

export default Leftbar;

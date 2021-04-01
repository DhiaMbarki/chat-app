import React, {useEffect, useState} from 'react';
import {Avatar} from "@material-ui/core";
import './chat.css';
import swal from 'sweetalert';
import AddBoxIcon from '@material-ui/icons/AddBox';

function ChatSide({id,user,addNewChat}) {
    const [seed, setSeed] = useState("");
    
   
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);

    const createChat = () => {
        const roomName = swal("Write something here:", {
            content: "input",
          })
          


        if(roomName){
            //dtabase stuff ...
        }
    };
    

    return !addNewChat ? (
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}/>
                <div className="sidebarChat_info">
                    <h2>{user}</h2>
                    <p>message ...</p>
                </div>
            </div>
        
    ) : (
        <div  onClick={createChat} className="sidebarChat">
            <h3 className="add-new-chat-title"><AddBoxIcon/></h3>
        </div>
    )
}

export default ChatSide;

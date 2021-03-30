import React, {useEffect, useState} from 'react';
import {Avatar} from "@material-ui/core";
import './chat.css';

function ChatSide({id,name,addNewChat}) {
    const [seed, setSeed] = useState("");
    
   
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);

    const createChat = () => {
        const roomName = prompt("Create your Chat here");

        if(roomName){
            //dtabase stuff ...
        }
    };

    return !addNewChat ? (
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat_info">
                    <h2>Romm name</h2>
                    <p>last message ...</p>
                </div>
            </div>
        
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h3 className="add-new-chat-title">Add New Chat</h3>
        </div>
    )
}

export default ChatSide;

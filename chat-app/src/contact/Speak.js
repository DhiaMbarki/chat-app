import React, {useEffect, useState} from 'react';
import "./speak.css"
import { Avatar,IconButton} from "@material-ui/core";
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';

function Speak() {
    const [seed, setSeed] = useState("");
    
   
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);

    return (
        <div className="chat">
            <div className="chat_header">
            <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}/>
            <div className="chat-headerInfo">
                <h3>Romm name</h3>
                <p>Last view at ...</p>
            </div>
            <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                    
                </div>
            </div>
            <div className="chat_body">

            </div>
            <div className="chat_footer"></div>
        </div>
    )
}

export default Speak

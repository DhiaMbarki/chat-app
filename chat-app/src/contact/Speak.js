import React, {useEffect, useState} from 'react';
import "./speak.css"
import { Avatar,IconButton} from "@material-ui/core";
import { Message, MoreVert, SearchOutlined} from '@material-ui/icons';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CallIcon from '@material-ui/icons/Call';
function Speak() {
    const [seed, setSeed] = useState("");
    
   
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);

    return (
        <div className="chat">
            <div className="chat_header">
                
            <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}/>
            <div className="chat_headerInfo">
                <h3>Romm name ⬇️</h3>
                <p>Last view at ...</p>
                </div>
            
            <div className="chat_headerRight">
                    <IconButton>
                    <VideoCallIcon/>
                    </IconButton>
                   
                    <IconButton>
                        <CallIcon/>
                    </IconButton>
                    
                </div>
            </div>
            <div className="chat_body">
<p className="chat_message">
<span className="chat_name">Dhia Mbarki</span>
Yo Yo i m here
<span className="chat_timestamp">
3:52pm 
</span>
</p>
            </div>
            <div className="chat_footer"></div>
        </div>
    )
}

export default Speak

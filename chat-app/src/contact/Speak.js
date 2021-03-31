import React, {useEffect, useState} from 'react';
import "./speak.css"
import { Avatar,IconButton} from "@material-ui/core";
import { MoreVert, SearchOutlined} from '@material-ui/icons';
import BlockIcon from '@material-ui/icons/Block';
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
                <h3>Romm name</h3>
                <p>Last view at ...</p>
                </div>
            
            <div className="chat_headerRight">
                    <IconButton>
                        <CallIcon/>
                    </IconButton>
                    <IconButton>
                        <BlockIcon/>
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

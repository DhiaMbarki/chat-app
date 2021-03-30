import React from 'react'
import "./speak.css"
import { Avatar} from "@material-ui/core";

function Speak() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar/>
            </div>
            <div className="chat_body">

            </div>
            <div className="chat_footer"></div>
        </div>
    )
}

export default Speak

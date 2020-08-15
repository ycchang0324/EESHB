import React, { useState } from 'react';
import './Comment.css';


const Comment = (props) => {
    if (props.reply === "") {
        return (
            <div id={props.id + "_container"} className="Comment_container">
                <div id={props.id + "_comment"} className="Comment_comments my-2 ml-1">
                    <p className="m-2">{props.comment}</p>
                    <p className="Comment_time m-2">{props.time}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div id={props.id + "_container"} className="Comment_container">
                <div id={props.id + "_comment"} className="Comment_comments my-2">
                    <p className="m-2">{props.comment}</p>
                    <p className="Comment_time m-2">{props.time}</p>
                </div>
                <div id={props.id + "_reply"} className="Comment_replies my-2">
                    <p className="m-2">{props.reply}</p>
                    <p className="Comment_time m-2">{props.time}</p>
                </div>
            </div>
        )
    }
}

export default Comment;
import React,{useState} from 'react';
import './Comment.css';


const Comment = (props) => {
    if(props.reply===""){
    return(
        <div id={props.id+"_container"} className="Comment_container">
            <div id={props.id+"_comment"} className="Comment_comments">
                <p >{props.comment}</p>
                <p className="Comment_time">{props.time}</p>
            </div>
        </div>
    )
    }else{
        return(
        <div id={props.id+"_container"} className="Comment_container">
            <div id={props.id+"_comment"} className="Comment_comments">
                <p >{props.comment}</p>
                <p className="Comment_time">{props.time}</p>
            </div>
            <div id={props.id+"_reply"} className="Comment_replies">
                <p >{props.reply}</p>
                <p className="Comment_time">{props.time}</p>
                </div>
            
            
        </div>
        )
    }
}

export default Comment;
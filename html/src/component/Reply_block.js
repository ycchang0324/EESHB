import React,{useState,useEffect} from 'react'
import './Reply_block.css'

const Reply_block = (props) => {
    const [reply, setReply] = useState('');

    const handleReplyChange = (e) => {
        let value = e.target.value
        setReply(value);
        console.log(reply)
    }

    return(
        <div id="Reply_block_container">
            <div>
                {props.comment}
                <input type="text" onChange={handleReplyChange}></input>
            </div>
            
        </div>
    )
}
export default Reply_block;
import React,{useState,useEffect} from 'react';
import './Comment_section.css'
import axios from 'axios'
import Comment from './Comment'
import send from '../image/send.png'
import Scrollbars from "react-custom-scrollbars";

/*comments form = [{comment:comment1,
                    reply:reply1},
                                ...]*/
const Comment_section = (props) => {
    //const [comments,setComments] = useState([])
    
    const [text, setText] = useState("")
    const [comments, setComments] = useState([]);
    
    
    useEffect(() => {
        // handleSubmit()
        renderComments()
    },[])

    
    const handleInputChange = (e) => {
        let value = e.target.value
        setText(value)
        console.log(text)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:100/backEnd/feedback.php',{
            comment: text,
            reply: ""
        }).then(function(data){
            console.log(data)
            if(data.data.success === 1){
                // alert("訊息已送達")
                renderComments()
            }else{
                alert("Something's wrong")
            }
        }).catch(function (err){
            console.log(err)
        })
    }
    const renderComments = () => {
        axios.post('http://localhost:100/backEnd/showFeedback.php',{})
            .then(function (data) {
                if(data.data.success===1){
                    console.log(data.data)
                    
                    let comments_list = []
                    let all_comments = data.data.allComment;
                    for  (let i=0; i<all_comments.length; i++){
                        comments_list.push(<Comment id={"Comment_"+(i+1)} comment={all_comments[i].comment} reply={all_comments[i].reply?all_comments[i].reply:""} time={all_comments[i].reg_date}></Comment>)
                    }

                    setComments(comments_list)
                }else{
                    console.log(data)
                }
                
        }).catch(function (error) {
                console.log(error);
           });

    
    }
    const handleEnterSubmit = (e) => {
        if (e.keyCode === 13){
            handleSubmit(e)
            e.target.value = ""
            setText("");
        }
        
    }
    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
        borderRadius: 6,
        backgroundColor: 'rgba(192,192,200, 0.5)'
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
    }
    return(
        
                <div id="Comment_section_container">
                    <div id="Comment_section_chatroom">
                        <Scrollbars renderThumbVertical={renderThumb}>
                        {comments}
                        </Scrollbars>
                    </div>
                    <form onSubmit={handleSubmit} id="Comment_section_form">
                        <textarea id="Comment_section_textarea" onChange={handleInputChange} onKeyUp={handleEnterSubmit}></textarea>
                        {/* <input type="submit" value="submit"></input> */}
                        <button id="Comment_section_submit_btn">
                            <img src={send} alt="send" id="Comment_section_send_icon"/>
                        </button>
                    </form>
                </div>
    )
    }
    

export default Comment_section;

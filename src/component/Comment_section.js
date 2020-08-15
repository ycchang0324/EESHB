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
        axios.post('https://book.ntuee.org/backend/feedback.php',{
            comment: text,
            reply: ""
        }).then(function(data){
            console.log(data)
            
            if(data.data.success === 1){
                // alert("訊息已送達")
                renderComments()
                document.getElementById("Comment_section_textarea").value = ""
                setText("")

            }else{
                alert("Something's wrong")
            }
        }).catch(function (err){
            console.log(err)
        })
    }
    const renderComments = () => {
        axios.post('https://book.ntuee.org/backend/showFeedback.php',{})
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
            
                <div id="Comment_section_container" className="container col-12 col-sm-11 col-md-10 col-lg-9">
                    {/* ============For PC (screen width >= md)============= */}
                    <div id="Comment_section_chatroom_pc" className="mx-auto d-none d-md-block col-md-12 px-1 px-md-2">
                        <Scrollbars renderThumbVertical={renderThumb}>
                        {comments}
                        </Scrollbars>
                    </div>
                    {/* ============For Mobile (screen width < md)============= */}
                    <div id="Comment_section_chatroom_mobile" className="mx-auto d-md-none d-block col-8 col-sm-9 px-1 px-md-2">
                        <Scrollbars renderThumbVertical={renderThumb}>
                        {comments}
                        </Scrollbars>
                    </div>
                    {/* ============For PC (screen width >= md)============= */}
                    <form onSubmit={handleSubmit} id="Comment_section_form_pc" className="d-none d-md-block mt-1 col-12 p-0 ">
                        <textarea id="Comment_section_textarea" className="col-9 col-sm-10 col-md-11" onChange={handleInputChange} onKeyUp={handleEnterSubmit}></textarea>
                        <div className="col-3 col-sm-2 col-md-1 float-right">
                            <button id="Comment_section_submit_btn" className="p-0" onClick={handleSubmit}>
                                <img src={send} alt="send" id="Comment_section_send_icon"/>
                            </button>
                        </div>
                    </form>

                    {/* ============For Mobile (screen width < md)========== */}
                    <form onSubmit={handleSubmit} id="Comment_section_form_mobile" className="d-md-none mt-1 col-8 col-sm-10 p-0 ">
                        <textarea id="Comment_section_textarea" className="col-9" onChange={handleInputChange} onKeyUp={handleEnterSubmit}></textarea>
                        <div className="col-3  float-right">
                            <button id="Comment_section_submit_btn" className="p-0" onClick={handleSubmit}>
                                <img src={send} alt="send" id="Comment_section_send_icon"/>
                            </button>
                        </div>
                    </form>

                </div>
    )
    }
    

export default Comment_section;

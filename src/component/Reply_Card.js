import React, {useState} from 'react';
import axios from 'axios'

const Reply_Card = (props) => {
    const [reply, setReply] = useState("");

    const handleInputChange = (e) => {
        let value = e.target.value;
        setReply(value);
        console.log(value);
    }

    const handleSubmit = (e) => {
        //TODO
        axios.post("https://book.ntuee.org/backend/manage/addReply.php",
        {reply:reply,
         id: props.id
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div className="card col-md-4 col-lg-4 col-xl-3 rounded-lg " id={"Reply_Card_"+props.index}>
        <div class="card-body">
            {/* <h5 class="card-title">Card title</h5> */}
            <p class="card-text">{props.comment}</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            <form class="form-inline">
                <input type="text" name="reply" className="form-control col-12 col-xl-9" onChange={handleInputChange}></input>
                <button className="btn btn-primary form-control " onClick={handleSubmit}>Reply</button>
            </form>
        </div>
        
        </div>
    )
}

export default Reply_Card;
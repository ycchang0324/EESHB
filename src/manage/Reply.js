import React, {Component} from 'react'
import './Reply.css'
import Reply_Card_Deck from '../component/Reply_Card_Deck'


const comment1 = "Some quick example text to build on the card title and make up the bulk of the card's content."
const test_comment = [
    [
        comment1,comment1,comment1
    ],
    [
        comment1,comment1,comment1
    ],
    [
        comment1,comment1,
    ],
]
class Reply extends Component {
    constructor(props){
        super(props);
        this.state=
            {

            }
        }
    getComments = () => {
        //TODO
        // parser like test_comment
    }
    renderComments =() => {
        //TODO
    }
    componentDidMount(){
        //TODO
    }

    textRenderComments = () => {
        let card_deck_list = []
        let count = 1;
        test_comment.forEach(
            card_deck => {
                card_deck_list.push(<Reply_Card_Deck cards = {card_deck} index = {count}/>)
                count = count + 1
            }
        )
        return card_deck_list;
    }
    render() {
        let card_decks = this.textRenderComments()
        return(
            <div id="Reply_container">
                <p id="Reply_title">回覆留言</p>
        
                    {card_decks}
                    {/* <div className="card col-3 rounded-lg">
                    <div class="card-body">
                        {/* <h5 class="card-title">Card title</h5> 
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> 
                        <input type="text"></input>
                    </div>
                    </div>
                    <div className="card col-3 rounded-lg" >
                    <div class="card-body">
                        {/* <h5 class="card-title">Card title</h5> 
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> 
                        <input type="text"></input>
                    </div>
                    </div>
                    <div className="card col-3 rounded-lg" >
                    <div class="card-body">
                        {/* <h5 class="card-title">Card title</h5> 
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> 
                        <input type="text"></input>
                    </div>
                    </div> */}
                    
                
            </div>
        )
    }
}
export default Reply;
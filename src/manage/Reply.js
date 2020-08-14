import React, { Component } from 'react'
import './Reply.css'
import Reply_Card_Deck from '../component/Reply_Card_Deck'
import Axios from 'axios';
/*==============Data Structure ================
// const test_comment = [
//     [
//         comment1,comment1,comment1
//     ],
//     [
//         comment1,comment1,comment1
//     ],
//     [
//         comment1,comment1,
//     ],
// ]
==============Data Structure ================*/
class Reply extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            all_comments: []
        }
    }
    getComments = () => {
        // parser like test_comment
        Axios.post("http://localhost:100/backend/showFeedback.php", {}
        ).then((data) => {
            if (data.data.success === 1) {
                console.log(data.data)

                let comments_list = []
                let sublist = []
                let all_comments = data.data.allComment;
                for (let i = 0; i < all_comments.length; i++) {
                    if (all_comments[i].reply === "") {
                        sublist.push(all_comments[i])
                        if (i % 3 === 2) {
                            comments_list.push(sublist)
                            sublist = []
                        }
                    }

                }
                comments_list.push(sublist)

                this.setState({ all_comments: comments_list })


            } else {

                console.log(data)
                alert("Something Wrong!!")
                this.setState({ all_comments: [] })

            }
        }).catch((err) => {

            console.log(err)
            this.setState({ all_comments: [] })

        })
    }
    renderComments = () => {
        
        let card_deck_list = []
        let allComment = this.state.all_comments
        let count = 1;

        allComment.forEach(
            card_deck => {
                card_deck_list.push(<Reply_Card_Deck cards={card_deck} index={count} />)
                count = count + 1
            }
        )

        return card_deck_list
    }
    componentDidMount() {
        this.getComments()

    }

    render() {
        let card_decks = this.renderComments()
        return (
            <div id="Reply_container">
                <p id="Reply_title">回覆留言</p>

                {card_decks}
                
            </div>
        )
    }
}
export default Reply;
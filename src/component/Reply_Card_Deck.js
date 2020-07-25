import React, {useState,useEffect} from 'react';
import Reply_Card from './Reply_Card'



const Reply_Card_Deck = (props) => {
    const [cards, setCards] = useState([])
    const renderCards = () => {
            let new_cards = []
            let count = 0
            props.cards.forEach(card => {
                new_cards.push(<Reply_Card comment = {props.cards[count]} index={props.index+"_"+(count+1)}/>)
                new_cards.push(<div className="w-100 d-block d-md-none"/>)
                count = count + 1
            })

            setCards(new_cards)
    }

    useEffect(()=>{
        renderCards()
    },[])

    return(
        
        <div className="card-deck mx-auto justify-content-center mt-md-3 ">
            {/* <Reply_Card comment = {props.cards[0]} index={props.index+"_1"}/>
            <div className="w-100 d-block d-md-none"/>
            <Reply_Card comment = {props.cards[1]} index={props.index+"_2"}/>
            <div className="w-100 d-block d-md-none"/>
            <Reply_Card comment = {props.cards[2]} index={props.index+"_3"}/>
            <div className="w-100 d-block d-md-none"/> */}
            {cards}
        </div>
    )
}

export default Reply_Card_Deck
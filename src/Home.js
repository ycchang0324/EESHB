import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
//import homepage from './image/homepage.png'
import right_hand from './image/right_hand.png'
import left_hand from './image/left_hand.png'
import E_pink from './image/E_pink.png'
import E_orange from './image/E_orange.png'
import S from './image/S.png'
import H from './image/H.png'
import B from './image/B.png'
import book from './image/book.png' 
import rules from './image/rules.png'
import buybook from './image/BuyBook_home.png'
import sellbook from './image/SellBook_home.png'
import fb from './image/facebook.png'
import email from './image/mail.png'

const Home = () =>{
    const skipAnime = (e) => {
        e.preventDefault();
        let imgs = document.getElementsByClassName("Home_anime")
        
        for (let i = 0; i<=7 ; i++){
            imgs[i].style.opacity = "1";
        }
    }
    return(
        <div id="Home_container">
            <div id="Home_anime_container" className="mx-auto" onClick={skipAnime} >
                <img src={book} alt="book" id="Home_book" className="Home_anime"></img>
                <img src={left_hand} alt="left-hand" id="Home_left_hand" className="Home_anime"></img>
                <img src={right_hand} alt="right-hand" id="Home_right_hand" className="Home_anime"></img>
                <img src={E_pink} alt="E-pink" id="Home_E_pink" className="Home_anime"></img>
                <img src={E_orange} alt="E-orange" id="Home_E_orange" className="Home_anime"></img>
                <img src={S} alt="S" id="Home_S" className="Home_anime"></img>
                <img src={H} alt="H" id="Home_H" className="Home_anime"></img>
                <img src={B} alt="B" id="Home_B" className="Home_anime"></img>
            </div>
            <div id="Home_btns" className="d-flex mx-auto justify-content-between mt-n4 mt-md-n5 col-11 col-sm-10 col-md-8 col-lg-7 col-xl-6">
                <Link to="/BuyBook">
                    <div className="Home_btns_div col">
                        <div id="Home_BuyBook_div " className="d-flex justify-content-center">
                            <button className="Home_btn_anime" id="Home_BuyBook_btn">
                                <img clasName="" src={buybook} alt="buybook"/>
                            </button>
                        </div>
                        <p>BuyBook</p>
                    </div>
                </Link>
                <Link to="/Rules">
                    <div className="Home_btns_div col">
                        <div id="Home_Rules_div" className="d-flex justify-content-center">
                            <button className="Home_btn_anime" id="Home_Rules_btn"><img src={rules} alt="rules"></img></button>
                        </div>
                        <p>Rules</p>
                    </div>
                    
                </Link>
                <Link to="/SellBook">
                    <div className="Home_btns_div col">
                        <div id="Home_SellBook_div" className="d-flex justify-content-center">
                            <button className="Home_btn_anime" id="Home_SellBook_btn"><img src={sellbook} alt="sellbook"></img></button>
                            
                        </div>
                        <p>SellBook</p>
                    </div>
                </Link>
            </div>
            <div id="Home_social_btn">
                <a href="https://www.facebook.com/%E5%8F%B0%E5%A4%A7%E9%9B%BB%E6%A9%9F%E4%BA%8C%E6%89%8B%E6%9B%B8-EESHB-107805437660041/">
                    <button className="Home_btn_anime Home_btns_div" id="Home_fb" >
                        <img src={fb} alt="fb"/>
                    </button>
                </a>
                <a href="mailto:ntueeshb@gmail.com">
                    <button className="Home_btn_anime Home_btns_div" id="Home_email">
                        <img src={email} alt="email"/>
                    </button>
                </a>
            </div>
        
        </div>
 
    )
}
export default Home;

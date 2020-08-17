import React, { useState } from 'react';
import './FillSuccess.css';
import { Link } from 'react-router-dom';

const FillSuccess = (props) => {
    const [time, setTime] = useState('1');
    const [place, setPlace] = useState('NTUEE');
    // const [money, setMoney] = useState('1');
    // let time1 = new Date();
    // setTime(time1)
    return (
        <div id="FillSuccess_container">
            <p>
                恭喜你成功填寫賣書表單<br />
                請至您的ntu mail信箱確認有收到驗證信<br />
                並在{time}將書拿至{place}<br />
                同時準備{props.location.state.fee}元手續費<br />
            </p>
            <Link to="/SellBook">
                <button>Back Home</button>
            </Link>
        </div>
    )
}

export default FillSuccess;
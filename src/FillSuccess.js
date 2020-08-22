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
            <div id="FillSuccess_box" className="container col-10 col-sm-7 col-md-6 col-lg-5 col-xl-4">
                <p id="FillSuccess_text" className="m-3 pt-3">
                    恭喜你成功填寫賣書表單<br />
                    請至您的ntu mail信箱<br />
                    確認有收到<em>驗證信</em><br />
                    並在<em>{time}</em>將書拿至<em>{place}</em><br />
                    同時準備{props.location.state.fee}元手續費<br />
                    {/* 同時準備<em>?元手續費</em><br /> */}
                </p>
                <div className="m-1 " >
                    <Link to="/SellBook">
                        <button id="FillSuccess_btn" className="btn btn-primary">Back To SellBook</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FillSuccess;
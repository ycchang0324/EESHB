import React, {useState,useEffect} from 'react';
import './SellerStateBar.css'
import Select from './Select'

const statesmap = {
    0:"not-received",
    1:"received",
    2:"selled",
    3:"take_back"
}

const colormap = {
    0: "#FFB8BA",
    1: "#FFFA94",
    2: "#7BE88A",
    3: "#9CEAFF"
}

const SellerStateBar = (props) => {
    //const [state,setState] = useState(0)
    useEffect(() => {
            document.getElementById(props.id+"background").style.backgroundColor = colormap[props.state]
        },[props.state])
    return(
        <tr id={props.id}>
            <td className="SellerStateBar_stuid">{props.stuid}</td>
            <td className="SellerStateBar_select" id={props.id+"background"}><Select id={props.id} options={Object.values(statesmap)} defaultOption={statesmap[props.state]} conn={props.func} dataname={props.stuid} className="sellerStateBar_class"></Select></td>
        </tr>
    )
}

export default SellerStateBar;
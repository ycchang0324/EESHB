import React, { useState, useEffect } from 'react';
import './SellerStateBar.css'
import Select from './Select'

const statesmap = {
    0:"未收到書",
    1:"已收到書",
    2:"已賣出",
    3:"沒賣出",
    4:"已領錢或退書",
    5:"未領錢或退書",
    6:"沒有拿書過來",
}

const colormap = {
    "未收到書": "#FFB8BA",
    "已收到書": "#E8B77B",
    "已賣出": "#FFFA94",
    "沒賣出": "#7BE88A",
    "已領錢或退書": "#9CEAFF",
    "未領錢或退書": "#C87FF0",
    "沒有拿書過來": "#FFFFFF"

}

const SellerStateBar = (props) => {
    const [state,setState] = useState(props.state)
    useEffect(() => {
        document.getElementById(props.id + "_background").style.backgroundColor = colormap[state]
    }, [state])

    const handleBgColorChange = (blank, newState) => {
        
        setState(newState)
        props.func(blank,newState)
        
    }
    return (

            <Select id={props.id} options={Object.values(statesmap)} defaultOption={props.state} conn={handleBgColorChange} className="sellerStateBar_class"/>
                
            
    )
}

export default SellerStateBar;
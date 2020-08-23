import React,{ useState, useEffect} from 'react';
import './OrderStatusBar.css';
import SellerStateBar from'./SellerStateBar'
import axios from 'axios'

/*{
    data:{
        id:
        name:
        stdId:
        category:
        subject:
        price:
        status:
    }
    index: //for selector
}
 */
// const statusmap_reverse = {
//     "未收到書":0,
//     "已收到書":1,
//     "已賣出":2,
//     "沒賣出":3,
//     "已領錢或退書":4,
//     "未領錢或退書":5,
//     "沒有拿書過來":6
// }

const OrderStatusBar = (props) => {

    const [state, setState] = useState(props.data.state)
    const [buyerId, setBuyerId] = useState(props.data.buyerId)

    const handleInputChange = (e) => {
        let value = e.target.value
        setBuyerId(value)
    }
    const handleStateChange = (blank, newState) => {
        setState(newState)
        // update remote database
        axios.post("https://book.ntuee.org/backend/manage/changeState.php",
        {
            id:props.data.id,
            state: newState,
            

        }).then(
            (data) => {
                if(data.data.success === 1){
                    // update local state
                    alert(data.data.msg)
                }else{
                    alert("Something wrong!\n"+data.data.msg)
                }
            }
        )
    }

    const handleBuyerIdChange = (e) => {
        if(e.keyCode === 13){
            alert(buyerId)
            axios.post("https://book.ntuee.org/backend/manage/changeBuyerId.php",
            {   
                id: props.data.id,
                buyerId: buyerId
            }).then(
                (data) => {
                    if(data.data.success === 1){
                        alert(data.data.msg)
                    }
                    else{
                        alert("Something's Wrong!\n"+data.data.msg)
                    }
                }
            )
        }
    }

    return (
    <tr id={"OrderStatusBar_container_"+props.index}>
        <td>
            {props.data.id}
        </td>
        <td>
            {props.data.name}
        </td>
        <td>
            {props.data.stdId}
        </td>
        <td className="">
            {props.data.buyerId
            ?props.data.buyerId
            :<input className="form-control col-11 mx-auto" type="text" onChange={handleInputChange} onKeyUp={handleBuyerIdChange}/>}
            
        </td>
        <td>
            {props.data.category}
        </td>
        <td>
            {props.data.subject}
        </td>
        <td>
            {props.data.price}
        </td>
        <td>
            {props.data.fee}
        </td>
        <td id={"SellerStateBar_"+props.index+"_background"} style={{boxSizing:"padding-box"}}>
            <SellerStateBar id={"SellerStateBar_"+props.index} state={state} func={handleStateChange} ></SellerStateBar>
        </td>
    </tr>
    )
}

export default OrderStatusBar;
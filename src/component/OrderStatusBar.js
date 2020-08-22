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
const statusmap_reverse = {
    "not-received":0,
    "received":1,
    "selled":2,
    "take_back":3
}

const OrderStatusBar = (props) => {

    const [status, setStatus] = useState(props.data.status)

    const handleStateChange = (blank, newStatus) => {
        setStatus(statusmap_reverse[newStatus])
        // update remote database
        // axios.post("",
        // {
        //     id:props.data.id,
        //     status: status

        // }).then(
        //     (data) => {
        //         if(data.data.success === 1){
        //             // update local state
        //             setStatus(statusmap_reverse[newStatus])
        //         }else{
        //             alert("Something wrong!\n"+data.data.msg)
        //         }
        //     }
        // )
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
        <td>
            {props.data.category}
        </td>
        <td>
            {props.data.subject}
        </td>
        <td>
            {props.data.price}
        </td>
        <td id={"SellerStateBar_"+props.index+"_background"} style={{boxSizing:"padding-box"}}>
            <SellerStateBar id={"SellerStateBar_"+props.index} state={status} func={handleStateChange} ></SellerStateBar>
        </td>
    </tr>
    )
}

export default OrderStatusBar;
import React,{ useState, useEffect} from 'react';
import './OrderStatusBar.css';


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
const OrderStatusBar = (props) => {
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
        <td>
            {props.data.status}
        </td>
    </tr>
    )
}

export default OrderStatusBar;
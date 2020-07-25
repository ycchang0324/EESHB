import React,{Component} from 'react';
import "./SellerCheck.css";
import SellerStateBar from "../component/SellerStateBar"
// let format = {
//     "stuid":"state" //not-recieved,recieved,selled,take-back (0,1,2,3)
// }
const statesmap_reverse = {
    "not-received":0,
    "received":1,
    "selled":2,
    "take_back":3
}
class SellerCheck extends Component {
    constructor(props){
        super(props)
        this.state={
            sellers : {
                "B08901072":1,
                "B08901073":0,
            }
        }

    }

    fetchData = () => {
        //TODO
    }

    renderStatusBar = (data) => {
        //TODO
    }
    
    handleSellerStateChange = (stuid,newstate) =>{
        let new_object = this.state.sellers
        newstate = statesmap_reverse[newstate]
        new_object[stuid] = newstate
        this.setState({
            sellers:new_object
        },console.log(
            this.state.sellers
        ))
    }
    
    render(){
        let seller_list = [];
        let count = 1;
        for (let seller in this.state.sellers){
            seller_list.push(<SellerStateBar id={"SellerStateBar_"+count} stuid={seller} state={this.state.sellers[seller]} func={this.handleSellerStateChange} ></SellerStateBar>)
            count = count + 1
        }
        return (
        <div id="SellerCheck_container">
            <p id="SellerCheck_title">賣家狀態管理</p>
            <table id="SellerCheck_table">
                <thead>
                    <tr>
                        <td>Student ID</td>
                        <td>State</td>
                    </tr>
                </thead>
                <tbody>
                    {seller_list}
                </tbody>
            </table>
        </div>
        )
    }   
}
export default SellerCheck;
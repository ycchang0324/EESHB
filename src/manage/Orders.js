import React, { Component } from 'react';
import './Orders.css';
import OrderStatusBar from '../component/OrderStatusBar'
import Scrollbars from "react-custom-scrollbars";
import Axios from 'axios';
/* format:
{

    id: 
    name: 
    stdId:
    buyerId: 
    category: 
    subject: 
    price: 
    state:
    fee: 

}
 */
const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {

        borderRadius: 6,
        backgroundColor: 'rgba(192,192,200, 0.8)'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
}

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stdId: '',
            id: '',
            result_list: []

        }
    }
    handleInputChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        this.setState(
            {
                [name]: value
            },
            console.log(
                this.state
            )
        )
    }

    handleSearchStdId = (e) => {
        e.preventDefault();
        Axios.post("https://book.ntuee.org/backend/manage/getBookOrderStdId.php",
            {
                idstdId: this.state.stdId

            }).then((data) => {

                if(data.data.success === 1){
                    console.log(data)
                    
                    this.setState({
                        result_list: this.renderStatusBar(data.data.orderList)
                    })
                }
                else{
                    alert("Something's Wrong\nCan not fetch Stdid Info")
                }

            }).catch(err => alert(err))
    }

    handleSearchid = (e) => {
        e.preventDefault();
        Axios.post("https://book.ntuee.org/backend/manage/getBookOrderBookId.php",
            {
                id: this.state.id

            }).then((data) => {

                if(data.data.success === 1){
                    console.log(data)
                    this.setState({
                        result_list: this.renderStatusBar(data.data.orderList)
                    })
                }
                else{
                    console.log(data)
                    alert("Something's Wrong\nCan not fetch id Info")
                }

            }).catch(err => console.log(err))
    }

    renderStatusBar = (orderList) => {
        let statusbar = []
        let count = 1
        for(let order of orderList){
            statusbar.push(<OrderStatusBar data={order} index = {count}/>)
            count = count + 1
        }

        return statusbar
    }

    sendMail_received = (e) => {
        
        e.preventDefault()
        Axios.post("https://book.ntuee.org/backend/mail/sendMailReceiveResult.php",{})
        .then((data)=>{
            console.log(data)
            if(data.data.success === 1){
                alert(data.data.msg)
                window.location = "/manage/Orders"
            }else{}
        })
    }

    sendMail_sellingResult = (e) => {
        
        e.preventDefault()
        Axios.post("https://book.ntuee.org/backend/mail/sendMailSellingResult.php",{})
        .then((data)=>{
            console.log(data)
            if(data.data.success === 1){
                alert(data.data.msg)
                window.location = "/manage/Orders"
            }
        })
    }

    sendMail_givenBackResult = (e) => {
        
        e.preventDefault()
        Axios.post("https://book.ntuee.org/backend/mail/sendMailGivenBackResult.php",{})
        .then((data)=>{
            console.log(data)
            if(data.data.success === 1){
                alert(data.data.msg)
                window.location = "/manage/Orders"
            }
        })
    }

    changeStatusToNotReceive = (e) => {
       
        e.preventDefault()
        Axios.post("https://book.ntuee.org/backend/manage/notReceive.php",{})
        .then((data)=>{
            console.log(data)
            if(data.data.success === 1){
                alert(data.data.msg)
                window.location = "/manage/Orders"
            }
            else{
                alert(data.data.msg)
            }
        })
    }

    changeStatusToNotSold = (e) => {
        
        e.preventDefault()
        Axios.post("https://book.ntuee.org/backend/manage/notSold.php",{})
        .then((data)=>{
            console.log(data)
            if(data.data.success === 1){
                alert(data.data.msg)
                window.location = "/manage/Orders"
            }
            else{
                alert(data.data.msg)
            }
        })
    }

    changeStatusToNotGivenBack = (e) => {
        
        e.preventDefault()
        Axios.post("https://book.ntuee.org/backend/manage/notGivenBack.php",{})
        .then((data)=>{
            console.log(data)
            if(data.data.success === 1){
                alert(data.data.msg)
                window.location = "/manage/Orders"
            }
            else{
                alert(data.data.msg)
            }
        })
    }

    getAllOrder = () => {
        Axios.post("https://book.ntuee.org/backend/manage/getAllBookOrder.php",{})
        .then(
            (data) => {
                if(data.data.success === 1){
                    console.log(data)
                    this.setState({
                        result_list: this.renderStatusBar(data.data.orderList)
                    })
                }
                else{
                    alert("Something's Wrong\nCan not fetch all order")
                }
            }
        )

    }

    componentDidMount(){
        this.getAllOrder()
    }

    render() {
        
        return (
            <div id="Orders_container">
                <p id="Orders_title">訂單查詢</p>
                <form className="container" id="Orders_search_box">
                    
                    <div className="form-group row d-flex justify-content-center">
                        <label for="stdId" className="col-3">Student ID</label>
                        <input type="text" class="form-control col-6" name="stdId" onChange={this.handleInputChange} />
                        <button className="btn btn-primary ml-3" onClick={this.handleSearchStdId}>Search</button>
                    </div>
                    <div className="w-100"></div>
                    <div className="form-group row d-flex justify-content-center">
                        <label for="id" className="col-3">Order's ID</label>
                        <input type="text" class="form-control col-6" name="id" onChange={this.handleInputChange} />
                        <button className="btn btn-primary ml-3" onClick={this.handleSearchid}>Search</button>
                    </div>
                </form>
                <Scrollbars renderThumbVertical={renderThumb}  style={{height:"50vh"}} className="mt-3 col-12 mx-auto">
                    <table id="Orders_table" className="table container table-responsive-sm col-xl-10 col-md-11 table-hover">
                        <thead className="thead-light">
                            <tr className="table-primary">
                                <td>ID</td>
                                <td>姓名</td>
                                <td>學號</td>
                                <td>買家學號</td>
                                <td>年級必選修</td>
                                <td>科目</td>
                                <td>價錢</td>
                                <td>手續費</td>
                                <td>狀態</td>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.result_list}
                        </tbody>

                    </table>
                </Scrollbars>
                <div id="Orders_btns">
                    <div className=" mt-3 mx-auto justify-content-center row">
                        <button className="btn btn-success col-md-3 mx-3 col-sm-2 my-sm-0 my-1" onClick={this.sendMail_received}>收書寄信</button>
                        <button className="btn btn-info col-md-3 mx-3 col-sm-2 my-sm-0 my-1" onClick={this.sendMail_sellingResult}>賣書結果寄信</button>
                        <button className="btn btn-warning col-md-3 mx-3 col-sm-2 my-sm-0 my-1" onClick={this.sendMail_givenBackResult}>領錢退書寄信</button>
                    </div>
                    <div className="w-100"></div>
                    <div className="mt-3 pb-3 mx-auto justify-content-center row">
                        <button className="btn btn-success col-md-3 mx-3 col-sm-2 my-sm-0 my-1" onClick={this.changeStatusToNotReceive}>未收到書</button>
                        <button className="btn btn-info col-md-3 mx-3 col-sm-2 my-sm-0 my-1"onClick={this.changeStatusToNotSold}>沒賣出</button>
                        <button className="btn btn-warning col-md-3 mx-3 col-sm-2 my-sm-0 my-1" onClick={this.changeStatusToNotGivenBack}>未領錢退書</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Orders;
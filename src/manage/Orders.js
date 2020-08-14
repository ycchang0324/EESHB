import React,{Component} from 'react';
import './Orders.css';
import OrderStatusBar from '../component/OrderStatusBar'
import Scrollbars from "react-custom-scrollbars";
import Axios from 'axios';

const test_data ={
    
        id:3,
        name:'Tim',
        stdId:'B08901072',
        category:'大一必修',
        subject:'微積分甲上下',
        price:200,
        status:1
    
}
const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
    
    borderRadius: 6,
    backgroundColor: 'rgba(192,192,200, 0.8)'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
}

class Orders extends Component {
    constructor(props){
        super(props);
        this.state = {
            stdId:'',
            id:'',

        }
    }
    handleInputChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        this.setState(
            {
                [name]:value
            },
            console.log(
                this.state
            )
        )
    }

    handleSearchStdId = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:100/manage/getBookOrderStdId.php",
        {
            stdId:this.state.stdId
        }).then((data)=>{

        //TODO

        }).catch(err => console.log(err))
    }

    handleSearchid = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:100/manage/getBookOrderBookId.php",
        {
            stdId:this.state.id
        }).then((data)=>{

        //TODO

        }).catch(err => console.log(err))
    }

    renderStatusBar = (data) => {
        let order_list = []
        //TODO
        return order_list
    }

    sendMail_received = (e) => {
        //TODO
        Axios.post("http://localhost:100/mail/sendMailReceiveResult.php")
    }

    sendMail_result = (e) => {
        //TODO
    }

    sendMail_return = (e) => {
        //TODO
    }

    changeStatusToNonReceived = (e) => {
        //TODO
    }

    changeStatusToNotSold = (e) => {
        //TODO
    }

    changeStatusToNotReturn = (e) => {
        //TODO
    }

    
    render() {
        let test_list = []
        for (let i=0 ; i<100 ; i++){
            test_list.push(<OrderStatusBar data={test_data} index={i}/>)
        }
        return(
            <div id="Orders_container">
                <p id="Orders_title">訂單查詢</p>
                <form className="container" id="Orders_search_box">
                {/* <ul id="Orders_search_box">
                    <li>
                        <p>Student ID</p>
                        <button onClick={this.handleSearchStdId}>Search</button>
                        <input type="text" name="stdId"></input>
                    </li>
                    <li>
                        <p>Order's ID</p>
                        <button onClick={this.handleSearchid}>Search</button>
                        <input type="text" name="id"></input>
                    </li>
                </ul> */}
                    <div className="form-group row text-center">
                    <label for="stdId"  className="col-3">Student ID</label>
                    <input type="text" class="form-control col-6" name="stdId" onChange={this.handleInputChange}/>
                    <button className="btn btn-primary ml-3" onClick={this.handleSearchStdId}>Search</button>
                    </div>
                    <div className="w-100"></div>
                    <div className="form-group row text-center">
                    <label for="id" className="col-3">Order's ID</label>
                    <input type="text" class="form-control col-6" name="id" onChange={this.handleInputChange}/>
                    <button className="btn btn-primary ml-3" onClick={this.handleSearchid}>Search</button>
                    </div>
                </form>
                <Scrollbars renderThumbVertical={renderThumb} style={{height:"50vh"}} className="mt-5 ">
                <table id="Orders_table" className="table container table-responsive-sm col-xl-10 col-md-11 table-hover">
                    <thead className="thead-light">
                        <tr>
                            <td>ID</td>
                            <td>姓名</td>
                            <td>學號</td>
                            <td>年級必選修</td>
                            <td>科目</td>
                            <td>價錢</td>
                            <td>狀態</td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {test_list}
                    </tbody>
                
                </table>
                </Scrollbars>
                <div id="Orders_btns">
                    <div className=" my-3 mx-auto justify-content-center row">
                        <button className="btn btn-success col-md-3 mx-3 col-sm-2 my-sm-0 my-1">收書寄信</button>
                        <button className="btn btn-info col-md-3 mx-3 col-sm-2 my-sm-0 my-1" >賣書結果寄信</button>
                        <button className="btn btn-warning col-md-3 mx-3 col-sm-2 my-sm-0 my-1">領錢退書寄信</button>
                    </div>
                    <div className="w-100"></div>
                    <div className="my-3 mx-auto justify-content-center row">
                        <button className="btn btn-success col-md-3 mx-3 col-sm-2 my-sm-0 my-1">未收到書</button>
                        <button className="btn btn-info col-md-3 mx-3 col-sm-2 my-sm-0 my-1">未賣出</button>
                        <button className="btn btn-warning col-md-3 mx-3 col-sm-2 my-sm-0 my-1">未領錢退書</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Orders;
import React, { Component } from 'react';
import './Manage.css';
import { Route } from 'react-router-dom';
import NavBar_manage from '../component/NavBar_manage'
import Orders from './Orders'
import Reply from './Reply'
import Old_book_sell from './Old_book_sell'

class Manage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
        <div>
            <NavBar_manage />
            <div id="Manage_container">
                <Route path="/manage/Orders" component={Orders} />
                <Route path="/manage/Reply" component={Reply} />
                <Route path="/manage/SellOldBook" component={Old_book_sell}/>
            </div>

        </div>)
    }
}

export default Manage;
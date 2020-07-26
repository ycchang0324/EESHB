import React,{Component} from 'react';
import './Manage.css';
import {Route} from 'react-router-dom';
import NavBar_manage from '../component/NavBar_manage'
import SellerCheck from './SellerCheck'
import Orders from './Orders'
import Reply from './Reply'

 class Manage extends Component {
     constructor(props){
         super(props)
         this.state={

         }
     }

     render(){
         return(<div>
                <NavBar_manage/>
                <div style={{marginLeft:"100px"}}>
                <Route path="/manage/SellerCheck" component={SellerCheck}></Route>
                <Route path="/manage/Orders" component={Orders}/> 
                <Route path="/manage/Reply" component={Reply}/>
                </div>
                
                </div>)
     }
}

export default Manage;
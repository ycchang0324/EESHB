import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import NavBar from './component/NavBar';
import Login from './Login';
import SellBook from './SellBook';
import BuyBook from './BuyBook';
import FeedBack from './FeedBack';
import FillSuccess from './FillSuccess';
import Old_book from './Old_book';

// import Manage from './Manage';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     // localStorage.getItem('auth')
//     true
//       ? <Component {...props} />
//       : <Redirect to={{
//           pathname: '/Login',
//           state: { from: props.location }
//         }} />
//   )} />
// )

const App = (props) => {
    // const [isLogin, setIslogin] = useState(false);
    // const handleisLoginChange = (isLogin) =>{
    //   console.log("call handleisLoginChange")
    //   console.log(isLogin)
    //   setIslogin(isLogin)
    useEffect (()=>{
        localStorage.setItem('auth',false)
    },[])
    // if(isLogin) window.location = "/manage";
    //   console.log('App isLogin = ',this.state.isLogin)
    // }
    return (
        <div>
            <NavBar />
            <div id="App_container">
                <Route path="/SellBook" component={SellBook} />
                <Route path="/BuyBook" component={BuyBook} />
                <Route path="/Login" render={(props) => <Login {...props}></Login>} />
                <Route path="/FeedBack" component={FeedBack} />
                <Route path="/FillSuccess" component={FillSuccess} />
                <Route path="/OldBooks" component={Old_book}/>
            </div>
        </div>
    )
}
export default App;
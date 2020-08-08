import React, { useState } from 'react';
import './App.css';
import { HashRouter, Route, Link } from 'react-router-dom';
import NavBar from './component/NavBar';
// import Home from './Home';
import Login from './Login';
import SellBook from './SellBook';
import BuyBook from './BuyBook';
import FeedBack from './FeedBack';
import FillSuccess from './FillSuccess';
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

const App = () => {
    // const [isLogin, setIslogin] = useState(false);
    // const handleisLoginChange = (isLogin) =>{
    //   console.log("call handleisLoginChange")
    //   console.log(isLogin)
    //   setIslogin(isLogin)
    // localStorage.setItem('auth',true);
    // if(isLogin) window.location = "/manage";
    //   console.log('App isLogin = ',this.state.isLogin)
    // }
    return (
        <HashRouter>
            <div>
                <NavBar />
                <div id="App_container">
                    {/* <Route path="/Home" component={Home}/> */}
                    <Route path=/SellBook" component={SellBook}/>
                    <Route path="/BuyBook" component={BuyBook} />
                    {/* <Route path="/Login" component={Login}/> */}
                    <Route path="/Login" render={(props) => <Login {...props}></Login>} />
                    {/* <PrivateRoute path="/manage" component={Manage} loginstatus={isLogin}/> */}
                    <Route path="/FeedBack" component={FeedBack} />
                    <Route path="/FillSuccess" component={FillSuccess} />
                </div>

            </div>
        </HashRouter>
    )
}
export default App;
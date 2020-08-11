import React, {useState} from 'react';
import axios from 'axios';
import './Login.css';
import { Redirect } from 'react-router';
const Login = (props) =>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [loginstate, setLoginstate] = useState(false);
    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "password"){
            //console.log(value)
            setPassword(value)
            
        }
        else if(name === "username"){
            //console.log(value)
            setUsername(value)
        }

        
    }
    const handleLogin = (isLoginorNot) =>{
		//console.log("handleLogin");
		let isLogin = isLoginorNot;
		//console.log('111114hroipsfjiweffberb     '+typeof(this.props.loginFunc))
		//console.log(this.props);
		//this.props.loginFunc(isLogin);
		if(isLogin){
			localStorage.setItem('auth',true);
            window.location = 'manage';
		}
	}
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://book.ntuee.org/backend/login.php",
        {
            "account":username,
            "password":password
            
        }).then(
            function(data){
                if(data.data.success === 1){

                    alert("Login Success!")
                    setLoginstate(true)
                    handleLogin(true)
                }else{
                    //console.log(data);
                    alert("Login Denied!")
                    setLoginstate(false)
                    handleLogin(false)
                }
            }
        ).catch(function (err){
            console.log(err);
            handleLogin(false)
            setLoginstate(false)
        })
    }
    if (loginstate){
        return <Redirect to="/manage"/>
    }else{
        return(
            <div id="Login_container">
                <form id="Login_input" onSubmit={handleSubmit}>
                <div>
                    <p id="Login_text">Manager Login</p>
                    <div className="Login_div">
                    <p>Username:</p>
                    <input id="Login_username" className="Login_input" type="text" name="username" onChange={handleInputChange}></input>
                    <span className="separator"></span>
                    </div>
                    <div className="Login_div">
                    <p>Password:</p>
                    <input id="Login_password" className="Login_input" type="password" name="password" onChange={handleInputChange}></input>
                    <span className="separator"></span>
                    </div>
                    <input type="submit" id="Login_submit" value="Login" onSubmit={handleSubmit}></input>

                </div>
    
                </form>
            </div>
        )
    }
    
}
export default Login;
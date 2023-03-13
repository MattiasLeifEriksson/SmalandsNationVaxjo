import React from "react";
import "./login.css"
const Login = () => {


    return(
        <div className="LoginWindow">
       <form className="LoginForm">
        <h1>Login</h1>
        <input type="text" placeholder="Enter Username"></input><br/><br/>
        <input type="password" placeholder="Enter Password"></input><br/><br/>
        <input id="LoginBtn" type="submit"></input>
       </form>
       <p>Vid bortglömda inloggningsuppgifter, kontakta webbplatsens utvecklare</p>
        
        </div>
    )
}
export default Login;
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginform_container">
        <h1>Welcome back to Pretty Login</h1>
        <p>It's great to have you back!</p>
        <form className="login_form">
          <label>EMAIL</label>
          <input className="email" type={"email"} />
          <label>PASSWORD</label>
          <input className="password" type={"password"} />
          <div className="rememberme">
            <div>
              <input type={"checkbox"} className='check_box' />
              <label>Remember me?</label>
            </div>

            <p>Forget password?</p>
          </div>
          <div className="login-part">
            <button className="login-button" type="submit">
              LOGIN
            </button>
            <button className="createaccount-button">CREATE ACCOUNT</button>
          </div>
          <p className="login-with">Or login with</p>
          <p className="facebook">Facebook Google</p>
        </form>
      </div>
      <div className="image_part">
        <img
          className="image"
          alt="pic"
          src="https://th.bing.com/th/id/OIP.72DO8sO9-yB2Eb1u6pZEywHaD3?w=296&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        />
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import "./Aouth.css"

const Login = () => {
  return (
    <div className="container">
      <div className="aouth-main background-log">
        <div className="aouth">
          <h2>وارد شوید</h2>
          <form>
            <div className="form-group">
              <label>ایمیل</label>
              <input type="email" name="email" placeholder="ایمیل..." />
            </div>
            <div className="form-group">
              <label>پسورد</label>
              <input type="password" name="password" placeholder="پسوورد..." />
            </div>
            <div className="form-group">
                <button type="submit">ورود به حساب کاربری</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

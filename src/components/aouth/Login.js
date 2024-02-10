import React, { useContext } from "react";
import "./Aouth.css";
import { DataContext } from "../context/Context";

const Login = () => {
  const value = useContext(DataContext);
  const handleLog = value.handleLog
  const [emailLog, setEmailLog] = value.emailLog;
  const [passwordLog, setPasswordLog] = value.passwordLog;
  return (
    <div className="container">
      <div className="aouth-main background-log">
        <div className="aouth">
          <h2>وارد شوید</h2>
          <form onSubmit={handleLog}>
            <div className="form-group">
              <label>ایمیل</label>
              <input
                type="email"
                name="email"
                placeholder="ایمیل..."
                onChange={(e) => setEmailLog(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>پسورد</label>
              <input
                type="password"
                name="password"
                placeholder="پسوورد..."
                onChange={(e) => setPasswordLog(e.target.value)}
              />
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

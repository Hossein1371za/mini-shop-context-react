import React, { useContext, useState } from "react";
import { DataContext } from "../context/Context";



const Register = () => {
  const value = useContext(DataContext)
  const [name,setName] = value.name
  const [email,setEmail] = value.email
  const [password,setPassword] = value.password
  const handleRegister = value.handleRegister
  
  return (
    <div className="container">
      <div className="aouth-main background-reg">
        <div className="aouth">
          <h2>ثبت نام کنید</h2>
          <form onSubmit={handleRegister()}>
            <div className="form-group">
              <label>نام کاربری</label>
              <input
                name="name"
                type="text"
                placeholder="نام کاربری"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>ایمیل</label>
              <input
                name="email"
                type="email"
                placeholder="ایمیل..."
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>پسوورد</label>
              <input
                name="password"
                type="password"
                placeholder="پسوورد..."
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit">ثبت نام</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

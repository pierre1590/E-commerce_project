import { useEffect,useState } from "react";
import api from "../util/api";

export default function Login() {


 

   


  return (
    <div>
      <h1>Login</h1>
      <form className="login-form" >
        <label>Email</label>
        <br />
        <input type="email" name="email" />

        <br />

        <label>Password</label>
        <br />
        <input type="password" name="password" />

        <br />

        <button type="submit" className="submit-login">Login</button>
      </form>
    </div>
  );
};



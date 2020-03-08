import React from "react";
import "./LoginForm.css";

export default function LoginForm(props) {
  let { handleId, handlePassword, login } = props;
  return (
    <div className="login">
      <form>
        <label>User ID</label>
        <input type="email" name="email" id="email" onChange={handleId} />
        <label>Password</label>
        <input
          type="paswword"
          name="password"
          id="pass"
          onChange={handlePassword}
        />
        <input type="submit" className="btn" value="Login" onClick={login} />
      </form>
    </div>
  );
}

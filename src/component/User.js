import React from "react";
import "./User.css";

function User(props) {
  let { name, age, gender, email, phoneNo } = props.user;
  return (
    <div className="user">
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Gender: {gender}</li>
        <li>Email: {email}</li>
        <li>Phone No: {phoneNo}</li>
      </ul>
    </div>
  );
}

export default User;

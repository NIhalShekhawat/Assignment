import React from "react";
import User from "./User";

function Users(props) {
  let { user } = props;
  //console.log(user);
  return (
    <div>
      {user.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;

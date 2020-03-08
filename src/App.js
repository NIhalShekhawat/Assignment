import React, { Component } from "react";
import Users from "./component/Users";
import LoginForm from "./component/LoginForm";
import "./App.css";

class App extends Component {
  state = {
    userId: "",
    password: "",
    loggedIn: false,
    error: "",

    user: [
      {
        id: 1,
        name: "test1",
        age: "11",
        gender: "male",
        email: "test1@gmail.com",
        phoneNo: "9415346313"
      },
      {
        id: 2,
        name: "test2",
        age: "12",
        gender: "male",
        email: "test2@gmail.com",
        phoneNo: "9415346314"
      },
      {
        id: 3,
        name: "test3",

        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 4,
        name: "test4",
        age: "14",
        gender: "male",
        email: "test4@gmail.com",
        phoneNo: "9415346316"
      },
      {
        id: 5,
        name: "test5",
        age: "15",
        gender: "male",
        email: "test5@gmail.com",
        phoneNo: "9415346317"
      },
      {
        id: 6,
        name: "test6",
        age: "16",
        gender: "male",
        email: "test6@gmail.com",
        phoneNo: "9415346318"
      }
    ]
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };
  handleId = e => {
    this.setState({ userId: e.target.value });
  };

  login = e => {
    e.preventDefault();
    let { userId, password } = this.state;
    if (userId === "hruday@gmail.com" && password === "hruday123") {
      this.setState({ loggedIn: true, error: "" });
    } else {
      this.setState({ error: "Wrong credentials" });
      //console.log(error);
      alert("Please enter correct credentials");
    }
  };
  render() {
    let { loggedIn } = this.state;
    return (
      <div className="App">
        {loggedIn ? (
          <Users user={this.state.user} />
        ) : (
          <LoginForm
            handleId={this.handleId}
            handlePassword={this.handlePassword}
            login={this.login}
          />
        )}
      </div>
    );
  }
}

export default App;

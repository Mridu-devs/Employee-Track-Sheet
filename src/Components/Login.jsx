import * as React from "react";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";

export default function Login() {
  const usernameRef = useRef(null);
  const passwordRef = useRef();
  const [date, setDate] = useState();

  function onLogin() {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const fetchingdata = async () => {
      const response = await fetch(
        `http://localhost:5004/users?username=${username}&&pasword=${password}`,
        { method: "GET" }
      );
      const response2 = await response.json();
      console.log("response2:", response2);
      console.log(response2[0].id);
      localStorage.setItem('UserID',`${response2[0].id}`)
    };
    fetchingdata();
    console.log(username);

    // const posting = async () => {
    //   const response = await fetch("http://localhost:5004/timing", {
    //     method: "POST",
    //   });
    // };
  }

  return (
    <div className="LoginMainContainer">
      <div className="LoginContainer1">
        <input
          className="LoginInputFields"
          type="text"
          placeholder="Username"
          ref={usernameRef}
        />
        <input
          className="LoginInputFields"
          type="text"
          placeholder="Password"
          ref={passwordRef}
        />
        <Button onClick={onLogin} variant="contained">
          Login
        </Button>
      </div>
    </div>
  );
}

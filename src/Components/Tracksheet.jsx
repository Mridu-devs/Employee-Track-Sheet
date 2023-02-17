import React, { useEffect, useState } from "react";
import cancel from "../Images/cancel.png";

function Tracksheet() {
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    const userID = localStorage.getItem("UserID");
    const fetchingdata = async () => {
      const response = await fetch(`http://localhost:5004/users?id=${userID}`, {
        method: "GET",
      });
      const response2 = await response.json();
      if(response2.length>0){
        console.log(response2[0].username);
        setName(response2[0].username);
      }
      if(response2.length==0){
        console.log("Please login first");
      }
   
    };
    fetchingdata();
  }, []);

  let modalbox = document.getElementById("modalbox");
  let modal = document.getElementById("modalbox-content");
  const onPunchIn = () => {
    console.log("I am clicked");
    let t = -5;
    if (t < 0) {
      modalbox.style.display = "flex";
      modal.style.backgroundColor = "rgb(160, 254, 160)";
      setMessage("Awesome!!! You are earlier than time");
    }
    if (t === 0) {
      modalbox.style.display = "flex";
      modal.style.backgroundColor = "dodgerblue";
      setMessage("Punctual !");
    }
    if (t > 0 && t < 10) {
      modalbox.style.display = "flex";
      modal.style.backgroundColor = " rgb(244, 219, 36)";
      setMessage("You are in nick of time! Please try to be bit early");
    }
    if (t > 10) {
      modalbox.style.display = "flex";
      modal.style.backgroundColor = "  rgb(255, 125, 96)";
      setMessage(`You are late by ${t} mins. Better have a good reason`);
      console.log("t>10");
    }
    document.getElementById("punchin").style.display = "none";
    document.getElementById("punchout").style.display = "block";
  };
  function cancelButton() {
    modalbox.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target === modalbox) {
      modalbox.style.display = "none";
      console.log("Helllloooooo");
    }
  };
  function punchingOut(){
    document.getElementById('punchin').style.display='block'
    document.getElementById('punchout').style.display='none'
  }

  return (
    <div className="Tracksheet-main-container">
      <div id="modalbox">
        aaa
        <div id="modalbox-content">
          <div className="mCancelButton-container">
            <img
              onClick={cancelButton}
              id="mCancelButton"
              src={cancel}
              alt=""
            />
          </div>
          <div>{message}</div>
        </div>
      </div>
      <div className="tInputContainers">
        <h1>Daily Tracksheet</h1>
        <input type="text" defaultValue={name} readOnly />
        <select name="" id="">
          <option value="">On Time</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <button id="punchin" className="btn-style" onClick={onPunchIn}>
          PUNCH IN
        </button>
        <button onClick={punchingOut} id="punchout" className="btn-style">
          PUNCH OUT
        </button>
        {/* <img
          src="https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default Tracksheet;

import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ listArray, setListArray, list, setList, setIsModalOpen }) => {
  const [value, setValue] = useState("");
  const [groupColor, setGroupColor] = useState("");

  const inputHandler = (event) => {
    setValue(event.target.value);
  };
  const createBtnHandler = () => {
    
    let newGroupObj = {
      name: value,
      text: [],
    };
   
    let newGroupWithColorObj = {
      name: value,
      color: groupColor,
    };
    let check = true;
    let len = groupColor.length;
    listArray.map((item)=>{
      if(value == item.name){
        console.log("same")
        check = false;
      }
    })
    if(value.length > 0 && check && groupColor.length > 0){
      setListArray((prev) => [...prev, newGroupObj]);
      setList((prev) => [...prev, newGroupWithColorObj]);
      setIsModalOpen(false);
    }else{
      if(value.length <= 0 && !check && len <= 0){
         alert("Error : You haven't choose Anything !!! Try Again.")
      }else if(!check){
        alert("Error : Group With this name Already Exists !!!")
      }else if(len <= 0){
        alert("Error : Please Select the color !!!")
      }
      else{
        alert("Error : Please Enter the Group Name First !!!")
      }
    }
  };

  const colorObj = {
    one: "#B38BFA",
    two: "#FF79F2",
    three: "#43E6FC",
    four: "#F19576",
    five: "#0047FF",
    six: "#6691FF",
  };

  const colorHandler = (event) => {
    let classes = event.target.id;
    let col = colorObj[classes];
    setGroupColor(col);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2 style={{ fontWeight: 500 }}>Create New group</h2>
        </div>
        <div className="group-name">
          <p style={{ fontWeight: 500 }}>Group Name</p>
          <input
            className="inputGroupName"
            placeholder="Enter group name"
            onChange={inputHandler}
            value={value}
          ></input>
        </div>
        <div className="chooseColor">
          <p style={{ fontWeight: 500 }}>Choose color</p>
          <div className="colorsGroup">
            <div id="one" className="color1 color" onClick={colorHandler}></div>
            <div id="two" className="color2 color" onClick={colorHandler}></div>
            <div
              id="three"
              className="color3 color"
              onClick={colorHandler}
            ></div>
            <div
              id="four"
              className="color4 color"
              onClick={colorHandler}
            ></div>
            <div
              id="five"
              className="color5 color"
              onClick={colorHandler}
            ></div>
            <div id="six" className="color6 color" onClick={colorHandler}></div>
          </div>
        </div>
        <button className="btnCreateGroup" onClick={createBtnHandler}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Modal;

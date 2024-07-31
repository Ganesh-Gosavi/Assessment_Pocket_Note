import {React,useState} from 'react'
import TextNotePanel from './TextNotePanel';
import sendOn from "../image/sendOn.png";
import sendOff from "../image/sendOff.png";
import './NoteSelectedPhone.css';
import arrow from '../image/arrow.png'

export default function NoteSelectedPhone({
  selectedNote,
  listArray,
  setListArray,
  data,
  hideStyle, 
  setHideStyle
}) {
    let profileName = selectedNote.name.trim().split(" ");
    const [value, setValue] = useState("");
    const textHandler = (e) => {
      setValue(e.target.value);
    };
  
    const sendHandler = () => {
      var d = new Date();
      let date = d.getDate();
      let year = d.getFullYear();
      let month = d.getMonth();
  
      const monthObj = {
        0: "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dec",
      };
  
      let obj = {
        note: value,
        time: `${d.getHours()}:${d.getMinutes()} ${
          d.getHours() > 12 ? "PM" : "AM"
        }`,
        date: `${date} ${monthObj[month]} ${year}`,
      };
  
      listArray.map((item) => {
        if (item.name === selectedNote.name) {
          setListArray((prev) => [...prev, item.text.push(obj)]);
          let prevData = JSON.parse(localStorage.getItem(item.name));
          let updatedData = prevData
            ? [...prevData, item.text[item.text.length - 1]]
            : item.text;
          let JSONCurrentText = JSON.stringify(updatedData);
          localStorage.setItem(item.name, JSONCurrentText);
        }
      });
      setValue("");
    };

    var displayNotePanel = "none";

    if(hideStyle == "none"){
       displayNotePanel = "";
    }

    const backBtnHandler = ()=>{
      setHideStyle("")
    }
  
    return (
      <div className="notePanelPhone" style={{display:displayNotePanel}}>
        <div className="noteHeaderPhone">
          <div className="profilePhone">
            <img src={arrow} onClick={backBtnHandler}></img>
            <div className="iconPhone" style={{ backgroundColor: selectedNote.color }}>
              {profileName[0].charAt(0).toUpperCase()}
              {profileName[1] ? profileName[1].charAt(0).toUpperCase() : null}
            </div>
            <span>{selectedNote.name}</span>
          </div>
        </div>
  
        <div className="noteMainPhone">
          {data
            ? data.map((item) => {
                return item ? (
                  <TextNotePanel key={item.note} item={item} />
                ) : (
                  <></>
                );
              })
            : null}
        </div>
        <div className="noteFooterPhone">
          <textarea
            className="textareaPhone"
            placeholder="Enter your text here..........."
            onChange={textHandler}
            value={value}
          ></textarea>
          {value.length > 0 ? (
            <img className="sendOnBtnPhone" src={sendOn} onClick={sendHandler}></img>
          ) : (
            <img className="sendOnBtnPhone" src={sendOff}></img>
          )}
        </div>
      </div>
    );
}

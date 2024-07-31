import React from 'react';
import "./NoteNotSelected.css";
import noteImg from"../image/note.png"

export default function NoteNoteSelected({noteListClicked}) {
  return (
    <div className={noteListClicked}>
      <div className='pageContainer'>
          <img className='noteImg' src={noteImg}></img>
          <h1 style={{fontWeight:500}} >Pocket Notes</h1>
          <p style={{fontWeight:500}}>Send and receive messages without keeping your phone online.
            <br/> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import PhoneListComponent from './PhoneListComponent';

export default function NoteListPhone({
  selectedNote,
  setSelectedNote,
  setNoteSelected,
  isModalOpen,
  setIsModalOpen,
  list,
  setList,
  mobileSelected,
  setMobileSelected,
  hideStyle, 
  setHideStyle
}) {


    const openModal = () => {
        setIsModalOpen(true);
    };
    const hideHandler = ()=>{
       setHideStyle("none");
    }
    return (
        <div className="noteListCreateBtn" style={{display:hideStyle}}>
          <div className="noteListContainer">
            <h1 className="appName">Pocket Notes</h1>
            <div className="noteList" onClick={hideHandler}>
              {list.map((item) => {
                return (
                  <PhoneListComponent
                    key={item.name}
                    selectedNote={selectedNote}
                    setSelectedNote={setSelectedNote}
                    item={item}
                    setNoteSelected={setNoteSelected}
                  />
                );
              })}
            </div>
          </div>
          <div className="createBtn" onClick={openModal}>
            +
          </div>
        </div>
      );
}

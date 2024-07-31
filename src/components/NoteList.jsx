import "./NoteList.css";
import { useState } from "react";
import ListComponent from "./ListComponent";

function NoteList({
  selectedNote,
  setSelectedNote,
  setNoteSelected,
  isModalOpen,
  setIsModalOpen,
  list,
  setList,
  mobileSelected,setMobileSelected
}){
  const openModal = () => {
    setIsModalOpen(true);
  };


  return (
    <div className="noteListCreateBtn">
      <div className="noteListContainer">
        <h1 className="appName">Pocket Notes</h1>
        <div className="noteList">
          {list.map((item) => {
            return (
              <ListComponent
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

export default NoteList;

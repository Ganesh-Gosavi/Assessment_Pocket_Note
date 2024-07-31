import "./App.css";
import NoteList from "./components/NoteList";
import NoteNoteSelected from "./components/NoteNoteSelected";
import Lock from "./image/lock.png";
import Media from "react-media";
import { useState, useEffect } from "react";
import NoteSelected from "./components/NoteSelected";
import Modal from "./components/Modal";
import NoteListPhone from './components/NoteListPhone';
import NoteNoteSelectedPhone from './components/NoteNoteSelectedPhone';
import NoteSelectedPhone from './components/NoteSelectedPhone';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteSelected, setNoteSelected] = useState(false);
  const [newGroupCreated, setNewGroupCreated] = useState(null);
  let noteListClicked = noteSelected ? " noteNotSelected" : null;
  let [selectedNote, setSelectedNote] = useState(null);
  const [hideStyle,setHideStyle] = useState("");

  const [mobileSelected,setMobileSelected] = useState(false);

  const [list, setList] = useState([
    {
      name: "My Notes",
      color: "#0047FF",
    },
    {
      name: "My Personal grp",
      color: "#B38BFA",
    },
    {
      name: "Javascript grp",
      color: "#FFC0C0",
    },
    {
      name: "HTML grp",
      color: "#43E6FC",
    },
    {
      name: "CSS Notes",
      color: "#F19576",
    },
    {
      name: "SQL Notes",
      color: "#6691FF",
    },
    {
      name: "Python Notes",
      color: "#FF66F0",
    },
  ]);

  if (selectedNote) {
    let jsondata = localStorage.getItem(selectedNote.name);
    var data = JSON.parse(jsondata);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if(event.target.className == "modal-overlay") {
       setIsModalOpen(false);
    }
  };

  const [listArray, setListArray] = useState([
    {
      name: "My Notes",
      text: [],
    },
    {
      name: "My Personal grp",
      text: [],
    },
    {
      name: "Javascript grp",
      text: [],
    },
    {
      name: "HTML grp",
      text: [],
    },
    {
      name: "CSS Notes",
      text: [],
    },
    {
      name: "SQL Notes",
      text: [],
    },
    {
      name: "Python Notes",
      text: [],
    },
  ]);

  const [styling,setStyling] = useState("1fr 3fr");
  const changeHandler = ()=>{
     setStyling("1fr");
  }

  // onChange={changeHandler}

  return (
    <div className="App" onClick={handleOutsideClick} style={{gridTemplateColumns:styling}} >
      <Media query="(max-width:430px)">
        {(matches) => {
          if(matches){
             changeHandler(); 
          }
          return matches ? (
            <>
              <NoteListPhone
                 noteSelected={noteSelected}
                 setNoteSelected={setNoteSelected}
                 selectedNote={selectedNote}
                 setSelectedNote={setSelectedNote}
                 isModalOpen={isModalOpen}
                 setIsModalOpen={setIsModalOpen}
                 list={list}
                 setList={setList}
                 mobileSelected={mobileSelected}
                 setMobileSelected={setMobileSelected}
                 hideStyle={hideStyle} 
                 setHideStyle={setHideStyle}
              />
              <div className="noteScreen" >
                {noteListClicked ? (
                  <NoteSelectedPhone
                    selectedNote={selectedNote}
                    listArray={listArray}
                    setListArray={setListArray}
                    data={data}
                    hideStyle={hideStyle} 
                    setHideStyle={setHideStyle}
                  />
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <>
              <NoteList
                noteSelected={noteSelected}
                setNoteSelected={setNoteSelected}
                selectedNote={selectedNote}
                setSelectedNote={setSelectedNote}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                list={list}
                setList={setList}
              />
              <div className="noteScreen">
                <NoteNoteSelected noteListClicked={noteListClicked} />
                {noteListClicked ? (
                  <NoteSelected
                    selectedNote={selectedNote}
                    listArray={listArray}
                    setListArray={setListArray}
                    data={data}
                  />
                ) : (
                  <></>
                )}
                <div className={noteListClicked}>
                  <div className="security">
                    <img className="lockImg" src={Lock}></img>
                    <p>end-to-end encrypted</p>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </Media>
      {isModalOpen ? (
        <Modal
          newGroupCreated={newGroupCreated}
          setNewGroupCreated={setNewGroupCreated}
          listArray={listArray}
          setListArray={setListArray}
          list={list}
          setList={setList}
          setIsModalOpen={setIsModalOpen}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;

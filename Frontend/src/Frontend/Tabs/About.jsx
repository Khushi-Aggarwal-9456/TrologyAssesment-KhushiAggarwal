import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../Context/NoteContext';
import NoteItem from './NoteDesign/NoteItem';
import "./NoteStyle.css";
import NouserFound from './NouserFound';

export default function About() {

  const context = useContext(noteContext);

  const { notes, setNotes, fetchAllNotes, addNote, updateNote, setAlertMessage, toggleToShow, userAuth, impNotes, limit, setLimit, impLimit, setImpLimit, sort, setSort } = context;

  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteDesc, setNewNoteDesc] = useState("");
  const [errorMessage, changeErrorMessage] = useState("");

  const [enewNoteTitle, esetNewNoteTitle] = useState("");
  const [enewNoteDesc, esetNewNoteDesc] = useState("");
  const [eerrorMessage, changeeErrorMessage] = useState("");

  const [noteToUpdate, changeNoteToUpdate] = useState();

  const [isUser, toggleIsUser] = useState(false);

  const [newNoteDisplay, toggleNewNoteDisplay] = useState("block");
  const [impNoteDisplay, toggleImpNoteDisplay] = useState("none");
  const [allNoteDisplay, toggleAllNoteDisplay] = useState("none");

  const [newNoteArrow, toggleNewNoteArrow] = useState("fa-solid fa-angle-up");
  const [impNoteArrow, toggleImpNoteArrow] = useState("fa-solid fa-angle-down");
  const [allNoteArrow, toggleAllNoteArrow] = useState("fa-solid fa-angle-down");

  const [impNotesPrev, setImpNotesPrev] = useState(0);
  const [impNotesNext, setImpNotesNext] = useState(6);

  const [notesPrev, setNotesPrev] = useState(0);
  const [notesNext, setNotesNext] = useState(6);

  const [impNotesPrevBtn, setImpNotesPrevBtn] = useState(true);
  const [impNotesNextBtn, setImpNotesNextBtn] = useState(true);
  const [notesPrevBtn, setNotesPrevBtn] = useState(true);
  const [notesNextBtn, setNotesNextBtn] = useState(true);

  const [notesStart, setNotesStart] = useState(0);
  const [notesEnd, setNotesEnd] = useState(limit);

  const [currentPage, setCurrentPage] = useState(1);

  const [notesLimit, setNotesLimit] = useState(notes.length);
  const [impNotesLimit, setImpNotesLimit] = useState(impNotes.length);

  const [sortBy, setSortBy] = useState('date');

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    setSort(e.target.value);
  }

  const handlePrevBtn = () => {
    if (currentPage === (notes.length % limit) + 1) {
      setNotesStart(notes.length - (notes.length % limit));
      setNotesEnd(notes.length);
    } else {
      setNotesStart(parseInt(currentPage) * parseInt(limit));
      setNotesEnd(parseInt(notesEnd) + parseInt(limit));
      console.log('in handleNextBtn, start:' + notesStart + ' end ', notesEnd);
    }
  }

  const handleNextBtn = () => {
    if (currentPage === (notes.length % limit) + 1) {
      setNotesStart(notes.length - (notes.length % limit));
      setNotesEnd(notes.length);
    } else {
      setNotesStart(parseInt(currentPage) * parseInt(limit));
      setNotesEnd(parseInt(notesEnd) + parseInt(limit));
      console.log('in handleNextBtn, start:' + notesStart + ' end ', notesEnd);
    }
  }

  const handleNotesLimit = (e) => {
    setNotesLimit(e.target.value);
    // alert(e.target.value);
    setLimit(e.target.value);
  }

  const handleImpNotesLimit = (e) => {
    setImpNotesLimit(e.target.value);
    // alert(e.target.value+" "+impNotes.length);
    setImpLimit(e.target.value);
  }

  const handleNewNoteArrow = () => {
    if (newNoteArrow === "fa-solid fa-angle-down") {
      toggleNewNoteDisplay("block");
      toggleNewNoteArrow("fa-solid fa-angle-up");
    } else {
      toggleNewNoteDisplay("none");
      toggleNewNoteArrow("fa-solid fa-angle-down");
    }
  }

  const handleImpNoteArrow = () => {
    if (impNoteArrow === "fa-solid fa-angle-down") {
      toggleImpNoteDisplay("block");
      toggleImpNoteArrow("fa-solid fa-angle-up");
    } else {
      toggleImpNoteDisplay("none");
      toggleImpNoteArrow("fa-solid fa-angle-down");
    }
  }

  const handleAllNoteArrow = () => {
    if (allNoteArrow === "fa-solid fa-angle-down") {
      toggleAllNoteDisplay("block");
      toggleAllNoteArrow("fa-solid fa-angle-up");
    } else {
      toggleAllNoteDisplay("none");
      toggleAllNoteArrow("fa-solid fa-angle-down");
    }
  }

  useEffect(() => {
    fetchAllNotes();
    if (userAuth === "")
      toggleIsUser(false);
    else
      toggleIsUser(true);
  });

  const handleNewNoteTitle = (event) => {
    setNewNoteTitle(event.target.value);
  }

  const handleNewNoteDesc = (event) => {
    setNewNoteDesc(event.target.value);
  }

  const ehandleNewNoteTitle = (event) => {
    esetNewNoteTitle(event.target.value);
  }

  const ehandleNewNoteDesc = (event) => {
    esetNewNoteDesc(event.target.value);
  }

  const addNewNote = () => {
    if (newNoteTitle === "" && newNoteDesc === "") {
      changeErrorMessage("enter title and description");
    } else if (newNoteTitle === "") {
      changeErrorMessage("enter title");
    } else if (newNoteDesc === "") {
      changeErrorMessage("enter description");
    } else {
      changeErrorMessage("");
      addNote(newNoteTitle, newNoteDesc, false);
      toggleToShow(true);
      setAlertMessage("New Note added successfully");
      setTimeout(() => {
        setNewNoteTitle("");
        setNewNoteDesc("");
        toggleToShow(false);
        setAlertMessage("");
      }, 1500);
    }
  }

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNNote = (note) => {
    changeeErrorMessage("");
    ref.current.click();
    esetNewNoteTitle(note.title);
    esetNewNoteDesc(note.description);
    changeNoteToUpdate(note);
  }

  const confirmUpdate = () => {
    // alert("updating note ID: "+noteToUpdate._id);
    if (enewNoteTitle === "" && enewNoteDesc === "") {
      changeeErrorMessage("enter updated title & description");
    } else if (enewNoteTitle === "") {
      changeeErrorMessage("enter updated title");
    } else if (enewNoteDesc === "") {
      changeeErrorMessage("enter updated desription");
    } else {
      changeeErrorMessage("");
      updateNote(noteToUpdate._id, enewNoteTitle, enewNoteDesc);
      toggleToShow(true);
      setAlertMessage("Note updated successfully");
      setTimeout(() => {
        toggleToShow(false);
        setAlertMessage("");
      }, 1500);
      refClose.current.click();
    }
  }

  return (

    <>
      {
        isUser === false ?
          <NouserFound />
          :
          <>
            <div className="newNoteForm">
              <div className="newnoticon d-flex justify-content-between" style={{
                display: "flex"
              }}>
                <h1>Add Note Form</h1>
                <i className={newNoteArrow} onClick={handleNewNoteArrow} />
              </div>

              <div className="newnote" style={{
                display: newNoteDisplay
              }}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                  <br />
                  <input
                    type="email"
                    aria-describedby="emailHelp"
                    value={newNoteTitle}
                    onChange={handleNewNoteTitle}
                    placeholder='note title'
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                  <textarea
                    type="text"
                    value={newNoteDesc}
                    onChange={handleNewNoteDesc}
                    placeholder='note description'
                  />
                </div>

                <p style={{
                  color: 'red',
                  fontWeight: "bolder"
                }}> {errorMessage} </p>

                <button className="btn btn-success addNoteButton loginButton" onClick={addNewNote}>Add Note </button>
              </div>

            </div>

            {/* <!-- Button trigger modal --> */}

            <button style={{
              display: "none"
            }} ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Updating a note</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ color: "white" }}></button>
                  </div>
                  <div className="modal-body">
                    <div className="newNoteForm updateForm">
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <br />
                        <input
                          type="email"
                          aria-describedby="emailHelp"
                          value={enewNoteTitle}
                          onChange={ehandleNewNoteTitle}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <textarea
                          type="text"
                          value={enewNoteDesc}
                          onChange={ehandleNewNoteDesc}
                        />
                      </div>
                    </div>
                  </div>

                  <p style={{
                    color: 'red',
                    fontWeight: "bolder",
                    marginLeft: "5%",
                    marginTop: "-3%"
                  }}>{eerrorMessage}</p>

                  <div className="modal-footer">
                    <button ref={refClose} type="button" className="btn btn-secondary updateformbutton loginButton" data-bs-dismiss="modal" >Close</button>
                    <button type="button" className="btn btn-success updateformbutton loginButton" onClick={confirmUpdate} >Update Note</button>
                  </div>
                </div>
              </div>
            </div>

            {
              impNotes.slice(0, parseInt(impLimit)).length > 0 ?
                <div style={{
                  marginTop: "5%"
                }}>
                  <div className="alllnotesandicon d-flex justify-content-between" >
                    <h1>UnActive Notes</h1>

                    <select value={impNotesLimit} onChange={handleImpNotesLimit}>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                    </select>

                    <i className={impNoteArrow} onClick={handleImpNoteArrow} />
                  </div>

                  <div style={{
                    display: impNoteDisplay,
                    border: "1px solid white"
                  }}>

                    <div className="row impNotesList">
                      {
                        impNotes.slice(0, parseInt(impLimit)).map((note) => {
                          return (
                            <NoteItem note={note} updateCurrentNote={updateNNote} />
                          )
                        })
                      }
                    </div>

                    <div className="buttons d-flex justify-content-around " style={{
                      border: "2px solid white",
                      padding: "1%"
                    }}>
                      
                    </div>

                  </div>

                </div>
                :
                <></>
            }

            {
              // notes.length > 0 ?
              notes.slice(0, parseInt(limit)).length > 0 ?
                <div style={{
                  marginTop: "5%"
                }}>
                  <div className="alllnotesandicon d-flex justify-content-between">
                    <h1>Active Notes</h1>

                    <select value={notesLimit} onChange={handleNotesLimit}>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                    </select>

                    <select value={sortBy} onChange={handleSortBy}>
                      <option value="date">Date</option>
                      <option value="title">Title</option>
                    </select>

                    <i className={allNoteArrow} onClick={handleAllNoteArrow} />
                  </div>

                  <div style={{
                    display: allNoteDisplay
                  }}>

                    <div className="row impNotesList">
                      {
                        sortBy === 'date' ?
                          notes.sort((a, b) => a.date - b.date).slice(0, parseInt(limit)).map((note) => {
                            return <NoteItem note={note} updateCurrentNote={updateNNote} />
                          })
                          :
                          notes.sort((a, b) => a.title.localeCompare(b.title)).slice(0, parseInt(limit)).map((note) => {
                            return <NoteItem note={note} updateCurrentNote={updateNNote} />
                          })
                      }
                    </div>

                  </div>


                </div>
                :
                <></>
            }

          </>
      }
    </>
  )
}

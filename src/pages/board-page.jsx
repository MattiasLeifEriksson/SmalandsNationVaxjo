import React from "react";
import "./pages.css";
import { useSelector } from "react-redux";
import { getBoard } from "../API/boardAPI";
import { useEffect, useState } from "react";

const Board = () => {
  const [boardArray, setBoardArray] = useState([]);
  const [showEditWindow, setShowEditWindow] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);
  
 // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! BYT UT ALLA tempARRAY MOT boardArray, SAMMA SAK MED setBoardArray!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  let tempArray1 = [];
  let roleArray = ["Ordförande", "Vice-ordförande", "Ekonomiansvarig", "Festansvarig", "Fest-och utskottsansvarig", "Festansvarig", "Aktivitets-och utskottsansvarig", "Aktivitetsansvarig", "Housemoose", "Band och PA", "Band/PA-och Jobbansvarig", "Info/Webb/PR", "Samarbete", "Sivansansvarig", "Sivansansvarig" ];
  let nameArray = ["Gabriella Långbergs", "Eric Sandberg", "Oliver Nordwall", "André Franzén", "Dag Mattson", "Amanda Sten", "Linus Johansson", "Mia Parkkinen", "Mårten Stridh", "Philip Giselson", "Cornelis Blom", "Filippa Lindblom", "Josefin Augustsson", "Melvin Johnsson", "Ramazan Soyal" ];
  for (let i = 0; i < nameArray.length; i++){
    let nameTemp = nameArray[i];
    let roleTemp = roleArray[i];
    let temporaryBoard = {name: nameTemp, role: roleTemp, id: i}
    tempArray1.push(temporaryBoard);
  }
  let login = true;
  useState(() => {
    setBoardArray(tempArray1);
  }, []);
 /* const login = useSelector((state) => state.login.value);
  console.log()
  useEffect(() => {
    if (boardArray.length === 0) {
      getBoard().then((result) => setBoardArray(result));
    }

  }, [boardArray]);*/
 

 const handleEditClick = (object) => {
  setSelectedObject(object);
  setShowEditWindow(true);
};
const handleRemoveClick = () => {
  const updatedArray = boardArray.filter(
    (object) => object.id !== selectedObject.id
  );
  setBoardArray(updatedArray);
  setShowEditWindow(false);
};

const handleAddClick = () => {
  setSelectedObject({ id: boardArray.length + 1, name: "", role: "" });
  setShowEditWindow(true);
};
const handleSaveChanges = (updatedObject) => {
  const updatedArray = boardArray.map((object) => {
    if (object.id === updatedObject.id) {
      return updatedObject;
    } else {
      return object;
    }
  });
 
  setBoardArray(updatedArray);
  setShowEditWindow(false);
};

  return ( 
    <div className="row">
      {/*SKA VARA boardArray.map, inte tempArray */}
      <h1>Nuvarande styrelse</h1>
      <div className="imageColumn"> 
     {boardArray.map((object, i) => ( 
 
        <div className="BoardImage">
            <img  key={i + "picture"} src={"https://i.imgur.com/qDYWGd1.jpeg"} alt="image"></img>
            <label key={i + "Name"} className="imageText" >Namn: {object.name}</label>
            <label key={i + "Role"} className="imageText" >Post: {object.role}</label>
           {login ? (
           <button className="editButton" onClick={() => handleEditClick(object)}>
            +
            </button>) : console.log("")}
            

        </div>
       
     
     ))}</div>
    {showEditWindow && (
  <div className="editWindowContainer">
    <div className="editWindow">
      <span className="closeButton" onClick={() => setShowEditWindow(false)}>
        &times;
      </span>
      <h2>Redigera styrelse-medlem</h2>
      <label>Namn:</label>
      <input
        type="text"
        value={selectedObject.name}
        onChange={(event) =>
          setSelectedObject({ ...selectedObject, name: event.target.value })
        }
      />
      <label>Post:</label>
      <input
        type="text"
        value={selectedObject.role}
        onChange={(event) =>
          setSelectedObject({ ...selectedObject, role: event.target.value })
        }
      />
       {selectedObject.id && (
              <button className="removeButton" onClick={() => handleRemoveClick()}>
                Ta bort
              </button>
            )}
            <button onClick={() => handleSaveChanges(selectedObject)}>Spara</button>
            {!selectedObject.id && (
              <button onClick={handleAddClick}>Lägg till</button>
            )}
    
    </div>
  </div>
)}
    </div>
  );
};
export default Board;

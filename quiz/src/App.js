import React, { useState } from "react";
import ToDo from "./ToDo"

function App() {
  const [inputList, setInputList] = useState("buy apple");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value)

  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("")
  };

  const deleteItems = (id) => {
    console.log('delete', id);
    setItems((oldItems) => {
      return oldItems.filter((arr, index) => {
        return index !== id
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add Items" value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>

          <ul>
            {items.map((item, index) => {
              return <ToDo item={item} key={index} id={index}
                onSelect={deleteItems} />
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

const getlocalstroage = () => {
  const list = localStorage.getItem("todolist");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function Todo() {
  const [inputdata, setInputdata] = useState("");
  const [item, setitem] = useState(getlocalstroage());

  const addItem = () => {
    if (!inputdata) {
      alert("please fill the data");
    } else {
      setitem([...item, inputdata]);
      setInputdata("");
    }
  };

  const deleteItem = (index) => {
    const updateData = item.filter((val, idx) => {
      return idx !== index;
    });
    setitem(updateData);
  };

  const remove = () => {
    setitem([]);
  };

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(item));
  }, [item]);

  return (
    <>
      <div className="main-div">
        <div className="sub-div">
          <figure>
            <img src="image/todo.png" alt="" />
            <figcaption>Add your list here</figcaption>
          </figure>

          <div className="main-content">
            <input
              type="text  "
              placeholder="✍ Add item"
              value={inputdata}
              onChange={(e) => setInputdata(e.target.value)}
            />
            <AddIcon className="addicon" onClick={() => addItem()} />
          </div>
          {item.map((val, index) => {
            console.log(val);
            return (
              <div className="items" key={index}>
                <p>
                  {val}

                  <DeleteIcon
                    className="deleteicon"
                    onClick={() => deleteItem(index, val)}
                  />
                </p>
              </div>
            );
          })}

          <button className="check" onClick={remove}>
            Remove All
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;

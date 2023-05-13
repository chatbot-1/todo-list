import React, { useEffect, useState } from "react";
import "./todo.css";

const getLocal = () => {
    let list = localStorage.getItem("list")
    if(list){
        return JSON.parse(localStorage.getItem("list"))
    } else {
        return [];
    }
}

const Todo = () => {
  const [add, setAdd] = useState("");
  const [item, setItem] = useState(getLocal());

  const addItem = () => {
    if (!add) {
    } else {
      setItem([...item, add]);
      setAdd("");
    }
  };

  const del = (id) => {
    const update = item.filter((elem, ind) => {
      return ind !== id;
    });
    setItem(update);
  };

  const remove = () => {
    setItem([]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(item));
  }, [item]);

  return (
    <div className="todo section">
      <div className="todo-container">
        <h1>Todo List</h1>
        <p>Add your items here</p>
        <div className="todo-content">
          <div className="todo-input">
            <input
              type="text"
              value={add}
              onChange={(e) => setAdd(e.target.value)}
              placeholder="add your list here"
            />
            <i
              className="fa-solid fa-plus add-btn"
              title="add item"
              onClick={addItem}
            ></i>
          </div>

          <div className="show">
            {item.map((curr, ind) => {
              return (
                <div className="todo-item" key={ind}>
                  <h4>{curr}</h4>
                  <i
                    class="fa-solid fa-trash"
                    title="delete item"
                    onClick={() => {
                      del(ind);
                    }}
                  ></i>
                </div>
              );
            })}
          </div>

          <button className="todo-btn" onClick={remove}>
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;

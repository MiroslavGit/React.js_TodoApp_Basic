import React from "react";

// 4. Vytvor samostatny modul pre komponent TodoList a nasledne ho importuj v App.js.
class TodoList extends React.Component {
    render() {
      return (
        <div>
          <ul>
            {this.props.items.map(item => (
              item.status === true &&
              <li  id="output" className={item.class} key={item.id}>{item.text}
                <button id="deleteButton" className="delete" onClick={(e) => this.props.onClickDelete(item)}><i class="fa-solid fa-trash-can"></i>Remove</button>
                <button id="softButton" className="soft" onClick={(e) => this.props.onSoftDelete(item)}><i class="fa-solid fa-circle-check"></i>Done</button>
              </li> 
            ))}
          </ul>
        </div>
      );
    }
  }
  
export default TodoList;
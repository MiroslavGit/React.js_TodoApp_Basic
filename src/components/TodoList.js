import React from "react";

import { format } from 'date-fns'


// 4. Vytvor samostatny modul pre komponent TodoList a nasledne ho importuj v App.js.
class TodoList extends React.Component {



    render() {
      return (
        <div>
          <ul>
            {this.props.items.map(item => (
              item.status === true &&
              <li  id="output" className={item.class} key={item.id}>
                  <p className = "dateOfCreated">Date of created: {format(item.dateOfCreated, 'dd/MM/yyyy' )} </p>
                  {item.text}
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
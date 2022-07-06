import React from "react";

// 4. Vytvor samostatny modul pre komponent TodoList a nasledne ho importuj v App.js.
class TodoList extends React.Component {
    render() {
      return (
        <div>
          <ul>
            {this.props.items.map(item => (
              <li className={item.className} key={item.id}>{item.text}
                <button onClick={(e) => this.props.onClickDelete(item)}>Delete!</button>
                <button onClick={(e) => this.props.onSoftDelete(item)}>Done!</button>
              </li> 
            ))}
          </ul>
        </div>
      );
    }
  }
  
export default TodoList;
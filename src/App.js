import React from 'react';
import TodoList from './components/TodoList'
import Form from './components/Form'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

 
  render() {
    return (
      <div classneme="app">
        <h3>TODO</h3>
        <TodoList
          items={this.state.items}
          onClickDelete={this.handleDelete}
          onSoftDelete={this.softDelete}
        />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  // 1. Prepis handleChange ako arrow function.
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState(state => {
      // 2. Zapracuj pridanie polozky newItem do pola items.

      let items = state.items;
      items.push(newItem);

      return {
        items,
        text: ''
      };
    });
  }

  handleDelete = (item) => {
    this.setState(state => {
      // 3. Zapracuj zmazanie polozky item z pola items.
      let items = state.items;
      
      items = items.filter( i => i.id !== item.id)
      
      return {
        items
      }

    });
  }

  softDelete = (item) => {
    this.setState(state => {
      let items = state.items;
 
       items.map((item) => {
        return (
          item.id == item.id ? item.className += "done" : item.className = ""  
         )
      })
      
      console.log(item.className)
      return {
        items
      }

    });
  }
}

export default TodoApp;

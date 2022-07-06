import React from 'react';
import Form from './components/Form'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
      ClassName: 'done'
    };

    this.handleChange = this.handleChange.bind(this);
  }


  render() {
    return (
     <Form
                items={this.state.items}
                

     />
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

      items.map(i => {
        return (
          item.id == item.id ? item.className = "done" : item.className = ""  
         )
      })

      return {
        items
      }

    });
  }
}

export default TodoApp;


/*  <div >
        <h3 className="title" >TODO</h3>
        <div>
            <form onSubmit={this.handleSubmit} className="wrapper">
              <input 
                id="input"
                type="text"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <button 
                className="add" 
                id="add">
                Add #{this.state.items.length + 1}
              </button>
            </form>
        </div>

        <h5 htmlFor="input" className="subtitle">
            What needs to be done?
        </h5>

          <TodoList
          items={this.state.items}
          onClickDelete={this.handleDelete}
          onSoftDelete={this.softDelete}
          className={this.ClassName}
        />
        
      </div> */


import React from 'react';
import Form from './components/Form'
import TodoList from './components/TodoList'
import Filter from "./components/Filter"


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
      class: ''
    };

    /* this.handleChange = this.handleChange.bind(this); */
  }


  render() {
    return (
      <div >
        <h3 className="title" >TODO</h3>

        <Form 
          submit={this.handleSubmit}
          change={this.handleChange}
          valueApp={this.state.value}
          numbersOfItems={this.state.items.length}
          status={this.state.status}
        />

        <h5 htmlFor="input" className="subtitle">
            What needs to be done?
        </h5>

        <Filter 
          allFunction={this.filterAll}
          activeFunction={this.filterActive}
          doneFunction={this.filterDone}
        />

        <TodoList
            items={this.state.items}
            onClickDelete={this.handleDelete}
            onSoftDelete={this.softDelete}
            className={this.ClassName}
        />
    </div>
    );
  }

  filterAll = () => {
    this.setState(state => {

      let items = state.items;  

      items.map(i => {
        return (
            i.status != true ? i.status = true : i.status = true  
         )
      })

      return {
        items
      }

  });
}

  filterActive = () => {
    this.setState(state => {

      let items = state.items;  

      items.map(i => {
        return (
            i.class == "done" ? i.status = false : i.status = true
         )
      })

      return {
        items
      }

  });
}


  filterDone = () => {
      this.setState(state => {
  
        let items = state.items;  
  
        items.map(i => {
          return (
              i.class != "done" ? i.status = false : i.status = true   
           )
        })
  
        return {
          items
        }
  
    });
  }


  // 1. Prepis handleChange ako arrow function.
  handleChange = (e) => {
    this.setState({ 
      text: e.target.value,
      /* items: localStorage.getItem('items') */
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }

    let dateOfCreated = new Date()
   
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      status: true,
      dateOfCreated: dateOfCreated
    };

    this.setState(state => {
      
      // 2. Zapracuj pridanie polozky newItem do pola items.
      let items = state.items;
      items.push(newItem);

      /* localStorage.setItem('items', items);
 */
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
          item.id == item.id ? item.class = "done" : item.class = ""  
         )
      })

      return {
        items
      }

    });
  }
}

export default TodoApp;


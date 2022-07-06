import React from 'react';
import TodoList from './TodoList'

class Form extends React.Component {
    render() {
        return (
        <div classneme="app">
            <h3>TODO</h3>
            <TodoList
            items={this.state.items}
            onClick={this.handleDelete}
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
}

export default Form;
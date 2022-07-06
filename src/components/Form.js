import React from 'react';
import TodoList from './TodoList'

class Form extends React.Component {
    render() {
        return (
            <div >
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
            
          </div>
        );
    }
}

export default Form;
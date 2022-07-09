import React from 'react';
import TodoList from './TodoList'

class Form extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.submit} className="wrapper">
                    <input 
                        id="input"
                        type="text"
                        onChange={this.props.change}
                        value={this.props.valueApp}
                    />
                    <button 
                        className="add" 
                        id="add">
                        Add #{this.props.numbersOfItems + 1} 
                    </button>
                </form>
            </div>
        );
      }
}

export default Form;
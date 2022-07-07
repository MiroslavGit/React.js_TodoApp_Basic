import React from 'react';

class Filter extends React.Component {
    render() {
        return (
            <div className="filter">
                <button id="add" onClick={this.props.allFunction} >All |</button>
                <button id="add" onClick={this.props.activeFunction} >Active |</button>
                <button id="add" onClick={this.props.doneFunction}>Already Done</button>  
            </div>           
        )
    }



}

export default Filter 
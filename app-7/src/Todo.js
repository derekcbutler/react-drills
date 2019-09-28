import React, {Component} from 'react';

class Todo extends Component {
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.item}
                <button onClick={() => this.props.deleteItem(this.props.i)}>Delete</button>
            </div>
        )
    }
}
export default Todo;
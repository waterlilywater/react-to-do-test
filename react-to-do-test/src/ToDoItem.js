import React, {Component} from 'react';

class ToDoItem extends Component {

  render() {

    return(
    	<li>{this.props.description}</li>
    );

  }

}

export default ToDoItem;

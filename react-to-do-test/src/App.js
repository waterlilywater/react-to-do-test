import React, {Component} from 'react';
import'./App.css';
import ToDoItem from './ToDoItem';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      newDescription: "",
      todoList: [],

    }

  }

render() {

  return(

    <div className="App">
      <todoItem description={'Dress up the cat'} />
      <todoItem description={'Go to the ER'} />
      <todoItem description={'Dress bandages'} />
    </div>

  );

}

}

export default App;

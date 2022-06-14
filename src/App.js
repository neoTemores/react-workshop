import React from 'react'

class App extends React.Component {

  // state you should have
    // todos
    // singleTodo
    // loading
    // loadingMessage = 'app is loading...' -> pass as props to loading component.

  
  // Components
    // 1. Todos
    // 2. TodoItem
    // 3. SingleTodo (single highlighted todo)
    // 4. Loading Component
    // 5. Button component - FOR THE BACK BUTTON

  // Functionality
    // Ability to set a single todo (click event on a todo)
    // Back buttons should make single todo state null. 


  // 1. Use componentDidMount to make an api call to https://jsonplaceholder.typicode.com/todos/
  // 2. The app should show all todos in a list.
  // 3. Show a loading component while making api calls
  // 4. Show a single todo when it is clicked on.
  // 5. Have a back button that changes the singleTodo state back to null.


  // When clicking on a single todo, should make API call to https://jsonplaceholder.typicode.com/todos/ID, 
  // get the id from the event object that is created. 

  // If loading, render loading component with loading message passed in as props.

  // Conditionaly render Todos -> TodoItem or singleTodo

  render() {
    return (
      <div className="App">
        <h1>Initial app component</h1>  
      </div>
    );
  }
}

export default App;

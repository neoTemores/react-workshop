import React from 'react'

class App extends React.Component {

  // 1. Use componentDidMount to make an api call to https://jsonplaceholder.typicode.com/todos/
  // 2. The app should show all todos in a list.
  // 3. Show a loading component while making api calls
  // 4. Show a single todo when it is clicked on.

  render() {
    return (
      <div className="App">
        <h1>Initial app component</h1>  
      </div>
    );
  }
}

export default App;

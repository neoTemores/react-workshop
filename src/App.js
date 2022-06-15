import React from 'react'
import Loading from './components/Loading'
import Todos from './components/Todos'
import SingleTodo from './components/SingleTodo'
import Header from './components/Header.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: null,
      singleTodo: null,
      loading: true,
      loadingMessage: 'App is loading...'
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data, loading: false }))
  }

  render() {

    const setSingleTodo = (e) => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.id}`)
        .then((response) => response.json())
        .then((data) => this.setState({ singleTodo: data }))
    }

    const deleteTodo = (e) => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.id}`,
        { method: 'DELETE' })

      this.setState({
        todos: this.state.todos.filter((todo) => todo.id != e.target.id)
      })
    }

    const goBackToHomePage = () => {
      this.setState({ singleTodo: null })
    }

    if (this.state.loading) {
      return (
        <Loading loadingMessage={this.state.loadingMessage} />
      )
    }

    return (
      <>

        <Header currentState={this.state} />

        {!this.state.singleTodo ?
          <Todos todos={this.state.todos} setSingleTodo={setSingleTodo} deleteTodo={deleteTodo} /> :
          <SingleTodo singleTodo={this.state.singleTodo} goBackToHomePage={goBackToHomePage} />}

      </>
    )
  }
}

export default App;

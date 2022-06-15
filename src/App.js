import React from 'react'
import Loading from './components/Loading'
import Todos from './components/Todos'
import SingleTodo from './components/SingleTodo'
import Header from './components/Header.js'
import NewTodoForm from './components/NewTodoForm'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: null,
      singleTodo: null,
      loading: true,
      loadingMessage: 'App is loading...',
      showAddNewTodoForm: false
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
        todos: this.state.todos.filter((todo) => todo.id !== +e.target.id),
        singleTodo: null
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

    const toggleShowAddNewTodoForm = () => {
      this.setState({ showAddNewTodoForm: !this.state.showAddNewTodoForm })
    }

    const postNewTodo = (text) => {
      fetch('https://jsonplaceholder.typicode.com/todos/', {
        method: 'POST',
        body: JSON.stringify({
          'title': text
        }),
        headers: {
          'Content-type': 'application/json'
        }
      })

        .then((response) => response.json())
        .then((data) => this.setState({
          todos: [data, ...this.state.todos],
          showAddNewTodoForm: false
        }))


    }

    return (
      <>

        <Header currentState={this.state}
          toggleShowAddNewTodoForm={toggleShowAddNewTodoForm} />

        {this.state.showAddNewTodoForm && <NewTodoForm postNewTodo={postNewTodo} />}

        {!this.state.singleTodo ?
          <Todos todos={this.state.todos} setSingleTodo={setSingleTodo} deleteTodo={deleteTodo} /> :
          <SingleTodo singleTodo={this.state.singleTodo} goBackToHomePage={goBackToHomePage} deleteTodo={deleteTodo} />}

      </>
    )
  }
}

export default App;

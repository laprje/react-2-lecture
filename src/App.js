import React from 'react';

import './App.css';
import Parent from './components/Parent'
import Blog from './components/Blog'
import Numbers from './components/Numbers'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      input: '',
      pancakeURL: ''
    }
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  showAPancake() {
    this.setState({
      pancakeURL : 'https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-1-1200.jpg'
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={(event) => this.handleChange(event)} />
        <h1>{this.state.input}</h1>  
        <button onClick={() => this.showAPancake()}> Click for pancakes</button>
        <img src={this.state.pancakeURL} alt=""/>
        <hr/>
        <hr/>
        <Parent />
        <hr/>
        <hr/>
        <Blog />
        <hr/>
        <hr/>
        <Numbers />
      </div>
    );
}
}

export default App;

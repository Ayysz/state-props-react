import './App.css';
import React, { Component } from 'react';

export default class App extends Component {
  
  // props atau property
  // biasanya terisisi di component seperti ini
  // <Col md={4} />
  //       ^ itu adalah props 
  constructor(props) {
    super(props)
    this.state = {
      count: 33,
    }
  }

  // untuk menambah nilai count
  onCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  minCount() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <h1>Belajar Count React</h1>
        <p>Count Bertambah : {this.state.count}</p>
        <button onClick={this.onCount.bind(this)}>
          Nambah 1
        </button>
        <p>Count Berkurang: {this.state.count}</p>
        <button onClick={this.minCount.bind(this)}>
          Kurang 1
        </button>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ujang'
    }
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name;
  }

  componentDidUpdate() {
    document.title = this.state.name;
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }
  
  render() {
    return (
      <section>
        <input 
        type="text" 
        value={this.state.name}
        onChange={this.handleNameChange}
        />
      </section>
    )
  }
}

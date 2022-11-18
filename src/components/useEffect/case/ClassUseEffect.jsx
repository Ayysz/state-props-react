import React, { Component } from 'react'

export default class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ujang',
      width: window.innerWidth,
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRezise = this.handleRezise.bind(this);
  }


  componentDidMount() {
    document.title = this.state.name;
    window.addEventListener('resize', this.handleRezise);
  }

  componentDidUpdate() {
    document.title = this.state.name;
  }

  handleRezise() {
    this.setState({
      width: window.innerWidth,
    })
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
          <br />
          <span>
            Window Width : {this.state.width}
          </span>
        </section>
      )
  }
}

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  randomGenerator = () => {
    const x = Math.ceil(Math.random() * 100)
    this.setState({number: x})
  }

  render() {
    const {number} = this.state
    return (
      <p className="bg-container">
        <p className="card">
          <h1 style={{color: ' #0b69ff'}}>Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.randomGenerator}
          >
            Generate
          </button>
          <p className="number">{number}</p>
        </p>
      </p>
    )
  }
}
export default RandomNumberGenerator

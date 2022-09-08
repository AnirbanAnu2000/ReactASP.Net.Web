import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
      return (
          <div className='container text-center'>
        <h1>Counter</h1>

              <p className='fw-bold'>This is a simple example of a React component.</p>

        <h1 aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></h1>

        <button className="btn btn-primary btn-lg fw-bold" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

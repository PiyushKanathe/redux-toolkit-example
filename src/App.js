import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementAsync, incrementByAmount } from './slices/counterSlice';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { count, increment, decrement, incrementByAmount, incrementAsync, dispatch } = this.props;
    const { inputValue } = this.state;

    return (
      <div className="App">
        <p>{count}</p>
        <div>
          <input value={inputValue} onChange={this.handleInputChange} />
        </div>
        <button onClick={increment}>increment</button>
        <button onClick={() => incrementAsync(Number(inputValue))}>increment By Amount - Async</button>
        <button onClick={decrement}>decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.value,
});

const mapDispatchToProps = {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

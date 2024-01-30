import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementAsync } from './slices/counterSlice';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value)
  return (
    <div className="App">
      <p>{count}</p>
      <div><input value={inputValue} onChange={e => setInputValue(e.target.value)} /></div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(incrementAsync(Number(inputValue)))}>increment By Amount - Async</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;

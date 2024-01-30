import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './slices/counterSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value)
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;

// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/actions/counterActions'; // Import actions

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div style={styles.counterContainer}>
      <h2 style={styles.counterText}>Counter: {count}</h2>
      <div style={styles.buttonContainer}>
        <button style={styles.incrementButton} onClick={() => dispatch(increment())}>Increment</button>
        <button style={styles.decrementButton} onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

const styles = {
  counterContainer: {
    textAlign: 'center',
    marginTop: '50px',
  },
  counterText: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  incrementButton: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#4caf50',
    color: '#fff',
  },
  decrementButton: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#f44336',
    color: '#fff',
  },
};

export default Counter;

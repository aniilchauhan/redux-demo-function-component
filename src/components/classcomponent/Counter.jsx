// Counter.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/actions/counterActions'; // Import actions

class Counter extends Component {
  render() {
    const { count, increment, decrement } = this.props;

    return (
      <div style={styles.counterContainer}>
        <h2 style={styles.counterText}>Counter: {count}</h2>
        <div style={styles.buttonContainer}>
          <button style={styles.incrementButton} onClick={increment}>Increment</button>
          <button style={styles.decrementButton} onClick={decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  increment,
  decrement
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

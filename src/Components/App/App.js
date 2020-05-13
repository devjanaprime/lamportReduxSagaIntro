import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component{

  handleClick = () => {
    console.log( 'in handleClick' );
    this.props.dispatch( { type: 'test00', payload: 'test info' } );
  }

  componentDidMount(){
    console.log( this.props );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Lamport Combine Logger
          </p>
          <p>Reducer One: { this.props.reduxState.reducerOne }</p>
          <p>Reducer Two: { this.props.reduxState.reducerTwo }</p>
          <button onClick={ this.handleClick }>Test Dispatch</button>
        </header>
      </div>
    ); // end return
  } // render
} // end class

const putStateOnProps = ( reduxState ) =>( { reduxState } );

export default connect(putStateOnProps)(App);

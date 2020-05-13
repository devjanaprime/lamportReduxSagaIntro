import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component{

  handleClick = () => {
    console.log( 'in handleClick' );
    this.props.dispatch( { type: 'test', payload: 'test info' } );
  }

  componentDidMount(){
    console.log( this.props );
    this.props.dispatch( { type: 'FETCH_STARSHIPS' } );
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
          <p>{ JSON.stringify( this.props.reduxState.shipReducer ) }</p>
        </header>
      </div>
    ); // end return
  } // render
} // end class

const putStateOnProps = ( reduxState ) =>( { reduxState } );

export default connect(putStateOnProps)(App);

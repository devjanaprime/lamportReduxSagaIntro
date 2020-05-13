import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component{

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
        </header>
      </div>
    ); // end return
  } // render
} // end class

const putStateOnProps = ( reduxState ) =>( { reduxState } );

export default connect(putStateOnProps)(App);

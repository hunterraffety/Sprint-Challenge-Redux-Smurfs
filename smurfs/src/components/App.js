// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { getSmurfs } from '../actions/index';

// styles
import './App.css';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurfs: []
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log(this.props);
    return (
      <div className='App'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className='smurfs-container'>
          {this.props.smurfs.map(smurf => (
            <h1>{smurf.name}</h1>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);

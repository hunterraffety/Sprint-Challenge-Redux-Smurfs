// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { getSmurfs, addSmurf } from '../actions/index';

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

  handleChange = e => {
    this.setState({
      smurfs: {
        ...this.state.smurfs,
        [e.target.name]: e.target.value
      }
    });
  };

  addSmurf = e => {
    e.preventDefault();
    console.log(`lasdlkasdlkasdlk`, this.props.addSmurf);
    this.props.addSmurf(this.state.smurfs).then(res => {
      if (res) {
        this.props.history.push('/');
      }
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className='App'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className='smurfs-container'>
          {this.props.smurfs.map(smurf => (
            <div className='smurf-card'>
              <h1>{smurf.name}</h1>
              <p>
                {smurf.name} is {smurf.age} years old!
              </p>
              <p>He's also {smurf.height}cm tall!</p>
            </div>
          ))}
        </div>
        <div className='add-smurf-form'>
          <form onSubmit={this.addSmurf}>
            <input
              type='text'
              name='name'
              value={this.state.smurfs.name}
              onChange={this.handleChange}
            />
            <input
              type='number'
              name='age'
              value={this.state.smurfs.age}
              onChange={this.handleChange}
            />
            <input
              type='number'
              name='height'
              value={this.state.smurfs.height}
              onChange={this.handleChange}
            />
            <button>Add Smurf</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  addingSmurf: state.addingSmurf
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);

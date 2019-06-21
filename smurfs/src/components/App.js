// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { getSmurfs, addSmurf, deleteSmurf } from '../actions/index';

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
    // console.log(`lasdlkasdlkasdlk`, this.props.addSmurf);
    this.props.addSmurf(this.state.smurfs).then(res => {
      if (res) {
        this.props.history.push('/');
      }
    });
  };

  deleteSmurf = e => {
    e.preventDefault();
    console.log('whats upppp', this.props.smurfs);
    this.props.deleteSmurf(this.props.smurfs.id);
  };

  render() {
    console.log('props from render in app', this.props);
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
              <p>He's also {smurf.height} tall!</p>
              <p onClick={this.deleteSmurf}>He is Smurf #{smurf.id}</p>
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
              placeholder='Name'
              required
            />
            <input
              type='number'
              name='age'
              value={this.state.smurfs.age}
              onChange={this.handleChange}
              placeholder='Age'
              required
            />
            <input
              type='text'
              name='height'
              value={this.state.smurfs.height}
              onChange={this.handleChange}
              placeholder='Height'
              required
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
  addingSmurf: state.addingSmurf,
  deletingSmurf: state.deletingSmurf,
  updatingSmurf: state.updatingSmurf,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf }
)(App);

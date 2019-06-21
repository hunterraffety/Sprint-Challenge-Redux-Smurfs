import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class AddSmurf extends React.Component {
  state = {
    smurfs: [],
    error: ''
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.smurfs,
        [e.target.name]: e.target.value
      }
    });
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.login(this.state.smurfs).then(res => {
      if (res) {
        this.props.history.push('/');
      }
    });
  };

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.addSmurf}>
          <input
            type='text'
            name='username'
            value={this.state.smurf.name}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='username'
            value={this.state.smurf.age}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='username'
            value={this.state.smurf.height}
            onChange={this.handleChange}
          />
          <button>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurf);

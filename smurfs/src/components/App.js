import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import { getSmurfsAsync } from '../actions/index'
import Smurfs from './Smurfs'
import SmurfForm from './SmurfForm'

/*
  to wire this component up you're going to need a few things.
  I'll let you do this part on your own. 
  Just remember, `how do I `connect` my components to redux?`
  `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  render() {
    if (this.props.spinner) {
      <div>Getting Smurfs In Progress...</div>;
    }
    return (
      <div className="listAndForm">
        <Smurfs />
        <SmurfForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfsReducer,
    spinner: state.spinner
  };
}

export default connect(
  mapStateToProps,
  { getSmurfsAsync }
)(App);




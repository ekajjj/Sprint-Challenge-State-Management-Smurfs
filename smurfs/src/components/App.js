import React, { Component } from "react";
import { connect } from 'react-redux';
import { getSmurfs, postSmurfs } from '../actions'
import SmurfList from './SmurfList'
import FormikSmurfPostForm from './SmurfPostForm'
import "./App.css";

class App extends Component {

  fetchSmurf = e => {
    e.preventDefault();
    this.props.getSmurfs()
  }
  createSmurf = (item) => {
    this.props.postSmurfs(item)
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <FormikSmurfPostForm createSmurf={this.createSmurf}/>
        <SmurfList fetchSmurf={this.fetchSmurf}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, { getSmurfs, postSmurfs })(App)
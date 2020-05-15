import React from 'react';
import './App.css';
import * as actions from "./actions/index";
import { connect } from "react-redux";
import Child from "./components/child";

class App extends React.Component{
  render(){
    console.log(this.props);
    var {counter} = this.props;
    return(
      <div className="App">
        {counter}
        <div>
          <button onClick={() => {this.props.increment(1)}}>Increment</button>
          <button onClick={() => {this.props.decrement(1)}}>Decrement</button>
          <Child counter={counter}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { counter: state.counter };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: (number) => dispatch(actions.incrementAction(number)),
    decrement: (number) => dispatch(actions.decrementAction(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

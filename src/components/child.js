import React from "react";
import * as actions from "./../actions/index";
import { connect } from "react-redux";

class Child extends React.Component {
  render() {
    var { counter, addTen } = this.props;
    return (
      <button onClick={() => addTen()}>
        Current Counter: {counter} CLick to add 10
      </button>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTen: () => dispatch(actions.incrementAction(10)),
  };
};

export default connect(null, mapDispatchToProps)(Child);

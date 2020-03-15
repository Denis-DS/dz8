import React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import { IRootState, IRootAction } from "../../reducers/rootReducer";
import * as actions from "../../reducers/counter/actions";

const mapStateToProps = (state: IRootState) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch: Dispatch<IRootAction>) =>
  bindActionCreators(
    {
      increaseCounter: actions.incrementCounter,
      decreaseCounter: actions.decrementCounter
    },
    dispatch
  );

type CounterProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Counter: React.FC<CounterProps> = props => {
  const increaseCounter = () => {
    console.log("increaseCounter");
    props.increaseCounter();
  };

  const decreaseCounter = () => {
    console.log("decreaseCounter");
    if (props.counter.value <= 0) return;
    props.decreaseCounter();
  };

  return (
    <>
      <p>Counter: {props.counter.value}</p>
      <button onClick={increaseCounter}>INCR</button>
      <button onClick={decreaseCounter}>DECR</button>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Counter));

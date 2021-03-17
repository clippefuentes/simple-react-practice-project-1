import React, { useState, useEffect, useReducer, useContext } from 'react';
import * as Reducer from '../store/hooks_state/hooks_reducer';
import * as ACTIONS from '../store/actions/actions';
import Context from '../utils/context'

const HooksContainer1 = () => {
  const context = useContext(Context)
  const [stateValue, setValue] = useState(0)
  const [useEffectValue, setUseEffectValue] = useState(null)
  const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

  useEffect(() => {
    setTimeout(() => {
      setUseEffectValue('Set Effect Worked')
    }, 3000);
  }, [stateValue])

  const incrementValue = () => {
    setValue(stateValue + 1)
  }

  const decrementValue = () => {
    setValue(stateValue - 1)
  }

  const changeUseEffectValue = () => {
    setUseEffectValue('Some String')
  }

  const handleDispatchTrue = () => {
    dispatch(ACTIONS.success())
  }

  const handleDispatchFalse = () => {
    dispatch(ACTIONS.failure())
  }

  return(
    <div>
      React Hooks
      <br />
      <button onClick={() => incrementValue()}>Increase</button>
      <button onClick={() => decrementValue()}>Decrease</button>
      <button onClick={() => changeUseEffectValue()}>Change Use Effect</button>
      <button onClick={() => handleDispatchTrue()}>Dispatch Success</button>
      <button onClick={() => handleDispatchFalse()}>Dispatch Failure</button>
      <button onClick={() => context.addGlobalValue()}>Add Global Value</button>
      <button onClick={() => context.decGlobalValue()}>Dec Global Value</button>
      <button onClick={() => context.dispatchContextTrue()}>Dispatch Context True</button>
      <button onClick={() => context.dispatchContextFalse()}>Dispatch Context False</button>
      <br />
      <div>
        <p>{useEffectValue ? useEffectValue : 'No Value'}</p>
        <br />
        {
          state.stateprop1 ?
          <p> State Prop 1 is True </p>:
          <p> State Prop 1 is False </p>
        }
        <br />
        <p> Local State : {stateValue}</p>
        <br />
        <p> Global State : {context.valueGlobalState}</p>
        <br />
        {
          context.reducerGlobalState ?
          <p> State Prop 2 is True </p>:
          <p> State Prop 2 is False </p>
        }
      </div>
    </div>
  )
}


export default HooksContainer1;

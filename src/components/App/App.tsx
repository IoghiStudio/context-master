import React, { useReducer, useState } from 'react';

enum ReducerType  {
  Add = 'add',
  Subtract = 'subtract'
}

interface State {
  counter: number;
  language: string;
}

const reducer = (
  state: State,
  action: ReducerType,
) => {
  switch(action) {
    case ReducerType.Add:
      return {
        ...state,
        counter: state.counter + 1,
      }

    case ReducerType.Subtract:
      return {
        ...state,
        counter: state.counter - 1,
      }

    default:
      return state;
  }
}

const initialState = {
  counter: 0,
  language: 'en'
}

export const App = () => {
  const [{ counter }, setCounter] = useReducer(reducer, initialState);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCounter(ReducerType.Subtract);
        }}
      >
        -
      </button>

        {counter}

      <button
        type="button"
        onClick={() => {
          setCounter(ReducerType.Add)
        }}
      >
        +
      </button>
    </>
  );
}

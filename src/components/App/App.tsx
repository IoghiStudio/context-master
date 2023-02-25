import React, { useReducer, useState } from 'react';

enum ReducerType  {
  Add = 'add',
  Subtract = 'subtract'
}

const reducer = (
  count: number,
  action: ReducerType,
) => {
  switch(action) {
    case ReducerType.Add:
      return count + 1;

    case ReducerType.Subtract:
      return count - 1;

    default:
      return count;
  }
}


export const App = () => {
  const [counter, setCounter] = useReducer(reducer, 0);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCounter(ReducerType.Add);
        }}
      >
        -
      </button>

        {counter}

      <button
        type="button"
        onClick={() => {
          setCounter(ReducerType.Subtract)
        }}
      >
        +
      </button>
    </>
  );
}

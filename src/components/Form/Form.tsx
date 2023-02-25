import { useState, useContext } from 'react';
import { AppContext } from '../AppContext';

export const Form = () => {
  const [name, setName] = useState<string>('');

  const { setTodos } = useContext(AppContext);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (!name.length) {
          return;
        }

        setTodos(name);
        setName('');
      }}
    >
      <label htmlFor="input">Name: </label>
  
      <input
        type="text"
        id="input"
        value={name}
        onChange={(event) => {
          setName(event.target.value)
        }}
      />

      <br />
      <br />

      <button type='submit'>Submit !</button>
    </form>
  );
}
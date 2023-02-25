import { useState } from 'react';

type Props = {
  onTodoAdd: (name: string) => void;
}

export const Form: React.FC<Props> = ({ onTodoAdd }) => {
  const [name, setName] = useState<string>('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (!name.length) {
          return;
        }

        onTodoAdd(name);
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
import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const TodoList = () => {
  const { todos } = useContext(AppContext);
  return (
    <ul>
      {todos.map(todo => (
        <li>{todo}</li>
      ))}
    </ul>
  );
}
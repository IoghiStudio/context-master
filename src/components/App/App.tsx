import React, { useState } from 'react';
import { Form } from '../Form';
import { TodoList } from '../TodoList';

export const App = () => {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div>
      <Form onTodoAdd={(name: string) => {
        setTodos(state => [...state, name])
      }} />

      <TodoList todos={todos} />
    </div>
  );
}

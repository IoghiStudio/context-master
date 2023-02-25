import React, { useState } from 'react';
import { Form } from '../Form';
import { TodoList } from '../TodoList';
import { AppContext, AppProvider } from '../AppContext';

export const App = () => {

  return (
    <AppProvider>
      <Form onTodoAdd={(name: string) => {
        setTodos(state => [...state, name])
      }} />

      <TodoList />
    </AppProvider>
  );
}


import React from 'react';
import NewTodo from './NewTodo';

function Header(props) {
  return (
    <header id="header">
      <h1>todos</h1>
      <NewTodo {...props} />
    </header>
  );
}

export default Header;
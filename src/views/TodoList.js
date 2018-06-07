
import React from 'react';
import TodoItem from './TodoItem';


function TodoList(props) {
  if (props.todos.size === 0) {
    return null;
  }

  // If this were expensive we could move it to the container.
  const areAllComplete = props.todos.every(todo => todo.complete);

  return (
    <section id="main">
      <input
        checked={areAllComplete ? 'checked' : ''}
        id="toggle-all"
        type="checkbox"
        onChange={props.onToggleAllTodos}
      />
      <label htmlFor="toggle-all">
        Mark all as complete
      </label>
      <ul id="todo-list">
        {[...props.todos.values()].reverse().map(todo => (
          <TodoItem
            key={todo.id}
            editing={props.editing}
            todo={todo}
            onDeleteTodo={props.onDeleteTodo}
            onEditTodo={props.onEditTodo}
            onStartEditingTodo={props.onStartEditingTodo}
            onStopEditingTodo={props.onStopEditingTodo}
            onToggleTodo={props.onToggleTodo}
          />
        ))}
      </ul>
    </section>
  );
}
export default TodoList;
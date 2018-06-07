import React from 'react';
import classnames from 'classnames';

function TodoItem(props) {
  const {editing, todo} = props;
  const isEditing = editing === todo.id;
  const onDeleteTodo = () => props.onDeleteTodo(todo.id);
  const onStartEditingTodo = () => props.onStartEditingTodo(todo.id);
  const onToggleTodo = () => props.onToggleTodo(todo.id);

  // Construct the input for editing a task if necessary.
  let input = null;
  if (isEditing) {
    const onChange = (event) => props.onEditTodo(todo.id, event.target.value);
    const onStopEditingTodo = props.onStopEditingTodo;
    const onKeyDown = (event) => {
      if (event.keyCode === ENTER_KEY_CODE) {
        onStopEditingTodo();
      }
    };
    input =
      <input
        autoFocus={true}
        className="edit"
        value={todo.text}
        onBlur={onStopEditingTodo}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />;
  }

  return (
    <li
      className={classnames({
        completed: todo.complete,
        editing: isEditing,
      })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.complete}
          onChange={onToggleTodo}
        />
        <label onDoubleClick={onStartEditingTodo}>
          {todo.text}
        </label>
        <button className="destroy" onClick={onDeleteTodo} />
      </div>
      {input}
    </li>
  );
}
export default TodoItem;
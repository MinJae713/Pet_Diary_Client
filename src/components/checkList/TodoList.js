import React from "react";
import { ScrollView } from "react-native";
import TodoListItem from "./TodoListItem";
import propTypes from "prop-types";

const TodoList = ({ Todos, onRemove, onToggle }) => {
  return (
    <ScrollView>
      {Todos.map((Todo) => (
        <TodoListItem
          key={Todo.id}
          {...Todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ScrollView>
  );
};

TodoList.propTypes = {
  onToggle: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
  Todos: propTypes.array.isRequired,
};

export default TodoList;

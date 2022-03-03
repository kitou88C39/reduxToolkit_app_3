//addTodos　受取人
//count 送金者の残高
//num　送金者の入金及び出勤額
//balance 受取人の残高
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos, removeTodos, updateTodos } from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todos: state?.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
  };
};
const DisplayTodos = (props) => {
  const { count, setCount } = props;
  const [sort, setSort] = useState("active");

  return (
    <div className="displaytodos">
      <ol style={{ display: "inline-block" }}>
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    count={count}
                    setCount={setCount}
                    updateTodo={props.updateTodo}
                  />
                )
              );
            })
          : null}
        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    count={count}
                    setCount={setCount}
                  />
                )
              );
            })
          : null}
        {props.todos.length > 0 && sort === "all"
          ? props.todos.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  count={count}
                  setCount={setCount}
                />
              );
            })
          : null}
      </ol>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);

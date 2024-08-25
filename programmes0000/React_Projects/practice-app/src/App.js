import "./App.css";
import { useReducer, useState } from "react";
import Todo from "./Todo";
import Reference from "./Reference";
import Example from "./Example";
import Memo from "./components/Memo";
import DateTimePicker from "react-datetime-picker";

import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

const reduce = (todos, action) => {
  switch (action.type) {
    case "add-todo":
      return [...todos, newTodo(action.payload.name)];
    case "delete-todo":
      return todos.filter((todo) => todo.id !== action.payload);
  }
};
const newTodo = (name) => {
  return { id: Date.now(), name: name };
};

function App() {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reduce, []);
  // const [todos,setTodos]=useState([])
  const [value, onChange] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add-todo", payload: { name: name } });
    // setTodos([...todos,])
    console.log(todos);
    setName("");
  };

  return (
    <div>
      {/* <Memo />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo id={todo.id} todo={todo} dispatch={dispatch} />;
      })}
      <Reference />
      <div>
        <Example />
      </div> */}

      <DateTimePicker disableCalendar onChange={onChange} value={value} />
    </div>
  );
}

export default App;

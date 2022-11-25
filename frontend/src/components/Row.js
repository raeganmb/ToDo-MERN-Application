import React from "react";

export default function Row(props) {
  return (
    <tbody>
      <tr>
        {/* <td><Link to={link} onClick={props.grabTodo(props.todo._id)}>{props.todo.name}</Link></td> */}
        <td>{props.todo.name}</td>
        <td>{props.todo.done ? "Done" : "Not Done"}</td>
        <td>
          <button onClick={() => props.handleDelete(props.todo._id)}>X</button>
        </td>
      </tr>
    </tbody>
  );
}

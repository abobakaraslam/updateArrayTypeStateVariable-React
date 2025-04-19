/* File: App.jsx */
import { useState } from "react";

function App() {
  const [state_array_color, set_array_color] = useState([
    "red",
    "yellow",
    "green",
  ]);
  const [state_array_vehicle, set_array_vehicle] = useState([
    "Suzuki",
    "Honda",
  ]);
  const updateArray = () => {
    set_array_color(["Yellow"]);

    state_array_vehicle.push("Toyota");
    set_array_vehicle([...state_array_vehicle]);
  };
  return (
    <div>
      <h1>
        <u>Update without PUSH</u>
      </h1>
      <h1>
        <b>Color Array Data: </b>
        {state_array_color}
      </h1>
      <ul>
        {state_array_color.map((elem, index) => {
          return (
            <li key={index}>
              Index {index}: {elem}
            </li>
          );
        })}
      </ul>

      <br />
      <br />

      <h1>
        <u>Update using PUSH</u>
      </h1>
      <h1>
        <b>Vehicle Array Data: </b>
        {state_array_vehicle}
      </h1>
      <ul>
        {state_array_vehicle.map((elem, index) => {
          return (
            <li key={index}>
              Index {index}: {elem}
            </li>
          );
        })}
      </ul>
      <button
        onClick={updateArray}
        className="bg-green-800 text-white p-2 m-2 cursor-pointer"
      >
        Change value
      </button>
    </div>
  );
}
export default App;

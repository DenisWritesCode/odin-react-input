import React from "react";

import Overview from "./Components/Overview";

class Form extends React.Component {
  render() {
    return (
      <div className="container ">
        <div className="form">
          <form action="#">
            <label htmlFor="task">
              <input type="text" name="task" id="task" />
            </label>

            <button type="submit">Add Task</button>
          </form>
        </div>
        <Overview />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;

import React from "react";

import Overview from "./Components/Overview";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: ["Add Tasks", "Add delete"],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // When form is submitted
  handleSubmit(e) {
    e.preventDefault();

    const task = document.querySelector("#task");

    this.setState({
      // push modifies the array
      tasks: this.state.tasks.concat(task.value),
    });

    task.value = "";
  }

  render() {
    return (
      <div className="container ">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="task">
              Add Task
              <input type="text" name="task" id="task" placeholder="Task..." />
            </label>

            <button type="submit">Add Task</button>
          </form>
        </div>
        <Overview tasks={this.state.tasks} />
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

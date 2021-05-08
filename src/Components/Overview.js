import React from "react";

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: props.tasks,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tasks !== this.props.tasks) {
      this.setState({
        tasks: this.props.tasks,
      });
    }
  }

  render() {
    return (
      <div className="list">
        <ul>
          {this.state.tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;

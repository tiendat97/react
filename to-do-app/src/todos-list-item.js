import React from "react";

class TodosListItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    } else {
      return (
        <td>
          <button onClick={this.onEditClick.bind(this)}>Edit</button>
          <button>Delete</button>
        </td>
      );
    }
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;
    const taskStyle = {
      color: isCompleted ? "red" : "green",
      cursor: "pointer"
    };
    return <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)} > {task} </td>;
  }

  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionsSection()}
      </tr>
    );
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onCancelClick() {
    this.setState({ isEditing: false });
  }
}

export default TodosListItems;

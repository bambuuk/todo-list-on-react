import { Component } from 'react';
import './list-item.scss';

class ListItem extends Component {
    state = {
        edit: false,
        task: ''
    }

    changeTask = () => {
        this.setState(({ edit }) => ({
            edit: !edit,
            task: this.props.task
        }))
    }

    editValueTask = (e) => {
        this.setState({
            task: e.target.value
        });
    }

    sendInfoTask = () => {
        const { editTask, currentId } = this.props;
        if (this.state.task) {
            editTask(currentId, this.state);
            this.setState(({ edit }) => ({
                edit: !edit
            }));
        }
    }

    render() {
        if (!this.state.edit) {
            return (
                <li className="list-item list-item_mrg">
                    <span className='list-item__task'>{this.props.task}</span>
                    <div className="btns">
                        <button type="button" className="btn btn-dark btn_margin" onClick={this.changeTask}>Edit</button>
                        <button type="button" className="btn btn-danger btn_margin" onClick={this.props.deleteTask}>Delete</button>
                    </div>
                </li>
            );
        } else {
            return (
                <li className="list-item list-item_mrg">
                    <input
                        name="task"
                        type="text"
                        placeholder="Change the value please"
                        className="list-item__input"
                        value={this.state.task}
                        onChange={this.editValueTask}
                    />
                    <div className="btns">
                        <button type="button" className="btn btn-dark btn_margin" onClick={this.sendInfoTask}>Edit</button>
                    </div>
                </li>
            );
        }
    }
}

export default ListItem;
import { Component } from "react";
import './add-item-list.scss';

class AddItemList extends Component {
    state = {
        task: ''
    }

    changeState = (e) => {
        this.setState({
            task: e.target.value
        });
    }

    sendInfoTask = () => {
        if (this.state.task) {
            this.props.addTaskToState(this.state);
            this.setState({
                task: ''
            });
        }
    }

    render() {
        return (
            <section className="add-item">
                <label htmlFor="add-item-text" className="add-item__label">Add a task</label>
                <input
                    id="add-item-text"
                    name="task"
                    type="text"
                    placeholder="Enter information please"
                    className="add-item__input"
                    value={this.state.task}
                    onChange={this.changeState}
                />
                <button type="button" className="btn btn-success add-item__btn" onClick={this.sendInfoTask}>Send</button>
            </section>
        );
    }
}

export default AddItemList;

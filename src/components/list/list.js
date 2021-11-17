import { Component } from 'react';
import './list.scss';
import ListItem from '../list-item/list-item.js';

class List extends Component {
    render() {
        const {data, deleteTask, editTask} = this.props;
        
        const elems = data.map(item => {
            const { task, id } = item;
            return (
                <ListItem 
                key={id} 
                task={task} 
                deleteTask={() => deleteTask(id)} 
                editTask={editTask}
                currentId={id}/>
            );
        });
        
        return (
            (data.length) ? (
            <ul className="list">
                {elems}
            </ul>
            ) : (
                <p style={{fontSize: 30, textAlign: 'center'}}>There are no tasks here yet</p>
            )
        );
    }
}

export default List;
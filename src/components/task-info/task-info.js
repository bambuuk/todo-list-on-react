import './task-info.scss';

const TaskInfo = ({ counterTasks }) => {
    return (
        <p className="task-info task-info_center">All tasks: {counterTasks}</p>
    );
}

export default TaskInfo;
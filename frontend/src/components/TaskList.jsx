import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  text-decoration: none;
  color: #007bff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #0056b3;
  }
`;

const BackIcon = styled.span`
  margin-right: 5px;
`;

const TaskContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
`;

const TaskCard = styled.div`
  background: #fff;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const TaskInfo = styled.div`
  flex-grow: 1;
`;

const TaskTitle = styled.h3`
  margin: 0;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const TaskDescription = styled.p`
  margin: 0;
`;

const TaskDueDate = styled.p`
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const AddTaskButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background: #28a745;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 10px;

  &:hover {
    background: #218838;
  }
`;

const ToggleButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #0056b3;
  }
`;

const Checkbox = styled.input`
  margin-right: 40px;
`;

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [showCompleted, setShowCompleted] = useState(true);

    useEffect(() => {
        axios.get('/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleCheckboxChange = (taskId, completed) => {
        axios.put(`/tasks/${taskId}`, { completed })
            .then(response => {
                setTasks(tasks.map(task =>
                    task._id === taskId ? { ...task, completed: response.data.completed } : task
                ));
            })
            .catch(error => console.error(error));
    };

    const filteredTasks = showCompleted ? tasks : tasks.filter(task => !task.completed);

    return (
        <>
            <BackButton to="/">
                <BackIcon>&#8592;</BackIcon> Back
            </BackButton>
            <TaskContainer>
                <ButtonContainer>
                    <AddTaskButton to="/add-task">Add Task</AddTaskButton>
                    <ToggleButton onClick={() => setShowCompleted(!showCompleted)}>
                        {showCompleted ? 'Show Incomplete Tasks' : 'Show All Tasks'}
                    </ToggleButton>
                </ButtonContainer>
                {filteredTasks.map(task => (
                    <TaskCard key={task._id}>
                        <TaskHeader>
                            <TaskTitle completed={task.completed}>{task.title}</TaskTitle>
                            <Checkbox
                                type="checkbox"
                                checked={task.completed}
                                onChange={(e) => handleCheckboxChange(task._id, e.target.checked)}
                            />
                        </TaskHeader>
                        <TaskDetails>
                            <TaskDueDate>{new Date(task.dueDate).toLocaleDateString()}</TaskDueDate>
                            <Link to={`/tasks/${task._id}`}>View Details</Link>
                        </TaskDetails>
                    </TaskCard>
                ))}
            </TaskContainer>
        </>
    );
};

export default TaskList;

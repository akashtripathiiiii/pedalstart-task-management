import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  background: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const TaskForm = () => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        completed: false
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`/tasks/${id}`)
                .then(response => setTask(response.data))
                .catch(error => console.error(error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(`/tasks/${id}`, task)
                .then(() => navigate('/'))
                .catch(error => console.error(error));
        } else {
            axios.post('/tasks', task)
                .then(() => navigate('/'))
                .catch(error => console.error(error));
        }
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel>Title</FormLabel>
                    <FormInput type="text" name="title" value={task.title} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Description</FormLabel>
                    <FormTextarea name="description" value={task.description} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Due Date</FormLabel>
                    <FormInput type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
                </FormGroup>
                <FormButton type="submit">Save Task</FormButton>
            </form>
        </FormContainer>
    );
};

export default TaskForm;

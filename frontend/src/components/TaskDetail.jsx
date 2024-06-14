import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
  background: #ffffff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
  position: relative;
`;

const DetailTitle = styled.h2`
  margin: 0;
  font-size: 2rem;
  color: #333;
`;

const DetailDescription = styled.p`
  color: #666;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #007bff;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;


function TaskDetail() {
    const [task, setTask] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/tasks/${id}`)
            .then(response => setTask(response.data))
            .catch(error => console.error('Error fetching task:', error));
    }, [id]);

    const handleEdit = () => {
        navigate(`/edit-task/${id}`);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/tasks/${id}`);
            navigate('/');
        } catch (error) {
            console.error('Error deleting task:', error);
            alert('Error deleting task. Please try again later.');
        }
    };

    if (!task) return <p>Loading...</p>;

    return (
        <DetailContainer>
            <DetailTitle>{task.title}</DetailTitle>
            <DetailDescription>{task.description}</DetailDescription>
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            <ButtonContainer>
                <Button onClick={handleEdit}>Edit</Button>
                <Button onClick={handleDelete} style={{ marginLeft: '10px', background: '#dc3545', hover: { background: '#c82333' } }}>Delete</Button>
            </ButtonContainer>
        </DetailContainer>
    );
}

export default TaskDetail;

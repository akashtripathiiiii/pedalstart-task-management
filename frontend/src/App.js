import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import TaskForm from './components/TaskForm';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
`;

const Header = styled.header`
  background-color: #343a40;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
  margin-top: 80px; /* Adjust based on header height */
  margin-bottom: 60px; /* Adjust based on footer height */
  overflow-y: auto;
`;

const Footer = styled.footer`
  background-color: #343a40;
  color: #ffffff;
  padding: 5px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header>
          <Title>Task Management</Title>
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/tasks/:id" element={<TaskDetail />} />
            <Route path="/add-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </Main>
        <Footer>
          <p>&copy; 2024 Akash Tripathi <span style={{ marginRight: '150px' }}></span> <a href="https://github.com/akashtripathiiiii/pedalstart-task-management" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>Github Link</a></p>
        </Footer>
      </AppContainer>
    </Router>
  );
}

export default App;

# Pedalstart Task Management

Pedalstart Task Management is a simple application that allows users to manage their tasks. Users can create, update, delete, and mark tasks as completed.

## Images
### 1. Task List
   
![Screenshot 2024-06-14 210512](https://github.com/akashtripathiiiii/pedalstart-task-management/assets/57222581/be65f60c-f1be-4dd1-a693-8377b35b4763)

### 2. Add Task
   
![Screenshot 2024-06-14 210532](https://github.com/akashtripathiiiii/pedalstart-task-management/assets/57222581/49da935d-8b84-4424-979d-1dc989b2ccae)

### 3. Show Incomplete Task
   
![Screenshot 2024-06-14 210549](https://github.com/akashtripathiiiii/pedalstart-task-management/assets/57222581/466fa74e-1ed6-40d2-a422-2a2933a632f3)

### 4. Task Detail

![Screenshot 2024-06-14 210549](https://github.com/akashtripathiiiii/pedalstart-task-management/assets/57222581/da77fe2f-d816-4f3a-a2bb-6979a64f9e6e)



## Features

- Add new tasks with a title, description, and due date.
- View a list of tasks.
- Edit and delete tasks.
- Mark tasks as completed with a checkbox.

## Technologies Used

- **Frontend**: React, Axios, Styled Components
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v12.x or later)
- npm (v6.x or later)
- MongoDB (local or cloud instance)

## Installation

### Clone the Repository

git clone https://github.com/akashtripathiiiii/pedalstart-task-management.git
cd pedalstart-task-management


### Backend Setup

1. Navigate to the `backend` directory:

    ```bash
    cd server
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI and other environment variables:

    ```env
    MONGO_URI=your_mongodb_uri
    PORT=5000
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

    The backend server should now be running on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the root directory of the project (where `package.json` is located):

    ```bash
    cd ..
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

    The frontend development server should now be running on `http://localhost:3000`.


## API Endpoints

### Task Endpoints

- **GET /tasks**: Get all tasks
- **GET /tasks/:id**: Get a single task by ID
- **POST /tasks**: Create a new task
- **PUT /tasks/:id**: Update a task by ID
- **DELETE /tasks/:id**: Delete a task by ID


## License

This project is licensed under the MIT License.

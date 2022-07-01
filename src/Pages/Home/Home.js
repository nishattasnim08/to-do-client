import React from 'react';
import ToDoTaskList from '../ToDoTaskList/ToDoTaskList';
import AddTask from './AddTask';

const Home = () => {
    return (
        <div>
            <AddTask/>
            <ToDoTaskList/>
        </div>
    );
};

export default Home;
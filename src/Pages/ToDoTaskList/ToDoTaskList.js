import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ToDoTaskList = () => {

    const [toDoList, setToDoList] = useState([]);
    const nevigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/todo')
            .then(res => res.json())
            .then(data => setToDoList(data));
    }, [])


    const handleCompletedTask = (id) => {
        const completed = true;
        fetch(`http://localhost:5000/task/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

            nevigate('/completedTask');
    };


    return (
        <div className='w-fit mx-auto my-10'>
            <h1>Your To Do List!</h1>
            <div class="overflow-x-auto w-full my-10">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='text-center'>
                            <th>
                                Checked
                            </th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>To Do</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            toDoList.map(toDo =>
                                <tr>
                                    <th>
                                        <label>
                                            <input onClick={() => handleCompletedTask(toDo._id)} type="checkbox" class="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div class="font-bold">{toDo.date}</div>
                                    </td>
                                    <td>
                                        <p>{toDo.time}</p>
                                    </td>
                                    <td title={toDo.task}>{toDo.task.slice(0, 20)} ...</td>
                                    <th>
                                        <button onClick={()=>nevigate(`/editToDo/${toDo._id}`)} class="btn btn-ghost btn-xs">Edit Task</button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ToDoTaskList;
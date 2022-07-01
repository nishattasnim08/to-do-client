import React, { useEffect, useState } from 'react';

const ToDoTaskList = () => {

    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/todo')
            .then(res => res.json())
            .then(data => setToDoList(data));
    }, [])

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
                                            <input type="checkbox" class="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div class="font-bold">{toDo.date}</div>
                                    </td>
                                    <td>
                                        <p>{toDo.time}</p>
                                    </td>
                                    <td title={toDo.task}>{toDo.task.slice(0,20)} ...</td>
                                    <th>
                                        <button class="btn btn-ghost btn-xs">Edit Task</button>
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
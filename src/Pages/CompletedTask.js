import React, { useEffect, useState } from 'react';

const CompletedTask = () => {

    const [completedTaskList, setCompletedTaskList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/completed')
            .then(res => res.json())
            .then(data => setCompletedTaskList(data));
    }, [])

    return (
        <div className='w-fit mx-auto my-10'>
            <h1>Your Completed Tasks!</h1>
            <div class="overflow-x-auto w-full my-10">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='text-center'>
                            <th>Date</th>
                            <th>Time</th>
                            <th>To Do</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            completedTaskList.map(completedTask =>
                                <tr>
                                    <td>
                                        <div class="font-bold">{completedTask.date}</div>
                                    </td>
                                    <td>
                                        <p>{completedTask.time}</p>
                                    </td>
                                    <td title={completedTask.task}>{completedTask.task.slice(0, 20)} ...</td>
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

export default CompletedTask;
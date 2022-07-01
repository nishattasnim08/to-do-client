import React from 'react';

const ToDoTaskList = () => {
    return (
        <div className='w-fit mx-auto my-10'>
            <h1>Your To Do List!</h1>
            <div class="overflow-x-auto w-full my-10">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='text-center'>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>To Do</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="font-bold">01-06-2022</div>
                            </td>
                            <td>
                                <p>1:30 pm</p>
                            </td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, distinctio?</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">Edit Task</button>
                            </th>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="font-bold">01-06-2022</div>
                            </td>
                            <td>
                                <p>1:30 pm</p>
                            </td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, distinctio?</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">Edit Task</button>
                            </th>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="font-bold">01-06-2022</div>
                            </td>
                            <td>
                                <p>1:30 pm</p>
                            </td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, distinctio?</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">Edit Task</button>
                            </th>
                        </tr>
                        {/* <!-- row 4 --> */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="font-bold">01-06-2022</div>
                            </td>
                            <td>
                                <p>1:30 pm</p>
                            </td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, distinctio?</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">Edit Task</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ToDoTaskList;
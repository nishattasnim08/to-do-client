import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditToDo = () => {

    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const { id } = useParams();

    const nevigate = useNavigate();


    
    const handleToDo = () => {
        // event.preventDefault();
        const completed = false;
        const data = { task, date, time, completed };
        console.log(data);



        fetch(`http://localhost:5000/editTask/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

            nevigate('/toDoTaskList');

    }







    useEffect(() => {
        const keyDownHandler = event => {
            console.log('User pressed: ', event.key);

            if (event.key === 'Enter') {
                event.preventDefault();

                // call submit function here
                handleToDo();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [task, date, time]);

    return (
        <div>
            <div className='w-1/4 mx-auto my-10'>
                <h1>Update Your Task</h1>
                <form>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Update Your Task Here</span>
                        </label>
                        <input value={task} onChange={event => setTask(event.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Update Your Task Date Here</span>
                        </label>
                        <input value={date} onChange={event => setDate(event.target.value)} type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Update Your Task Time Here</span>
                        </label>
                        <input value={time} onChange={event => setTime(event.target.value)} type="time" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditToDo;
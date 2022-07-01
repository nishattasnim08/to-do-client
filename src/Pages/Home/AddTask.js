import React, { useEffect, useState } from 'react';

const AddTask = () => {

    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleToDo = () => {
        // event.preventDefault();
        console.log(task, date, time);

        setTask('')
        setDate('')
        setTime('')
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
        <div className='w-1/4 mx-auto my-10'>
            <h1>Add Your Task</h1>
            <form onSubmit={handleToDo}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter Your Task Here</span>
                    </label>
                    <input value={task} onChange={event => setTask(event.target.value)} type="text"  placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter Your Task Date Here</span>
                    </label>
                    <input value={date} onChange={event => setDate(event.target.value)} type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter Your Task Time Here</span>
                    </label>
                    <input value={time} onChange={event => setTime(event.target.value)} type="time" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </form>
        </div>
    );
};

export default AddTask;
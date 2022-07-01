import React from 'react';

const AddTask = () => {
    return (
        <div className='w-1/4 mx-auto my-10'>
            <h1>Add Your Task</h1>
            <div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter Your Task Here</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter Your Task Date Here</span>
                    </label>
                    <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter Your Task Time Here</span>
                    </label>
                    <input type="time" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default AddTask;
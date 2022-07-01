import React from 'react';

const EditToDo = () => {
    return (
        <div>
            <div className='w-1/4 mx-auto my-10'>
            <h1>Update Your Task</h1>
            <div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Update Your Task Here</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Update Your Task Date Here</span>
                    </label>
                    <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Update Your Task Time Here</span>
                    </label>
                    <input type="time" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default EditToDo;
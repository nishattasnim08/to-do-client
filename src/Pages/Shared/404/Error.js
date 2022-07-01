import React from 'react';
import error from '../../../404-Error.png';

const Error = () => {
    return (
        <div className='w-2/3 mx-auto my-auto'>
            <img src={error} alt="Page Not Found" />
        </div>
    );
};

export default Error;
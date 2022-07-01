import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {

    const [date, setDate] = useState(new Date())

    return (
        <div>
            <div className='lg:w-1/2 mx-auto'>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
                <p>{format(date, 'PP')} : is selected!</p>
            </div>
        </div>
    );
};

export default Calender;
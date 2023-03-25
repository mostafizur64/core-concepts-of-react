import React, { useEffect, useState } from 'react';

const Basic = () => {
    const [value, setValue]= useState(0);
    const handleCount =()=>{
        const newValue = value + 1;
        setValue(newValue);
    }
    useEffect(()=>{
        // console.log('depend of value ')
    }
    ,[value])

    return (
        <div className='text-center mt-4 space-y-4'>
            <h1>Count : {value}</h1>
            <button onClick={handleCount} className='btn secondary mr-2'>Plus</button>
            <button className='btn warning'>Minus</button>
        </div>
    );
};

export default Basic;
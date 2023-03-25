import React, { useState } from 'react';

const ObjectExamples = () => {
const [value, setValue] = useState({
    name:'mostafizur ',
    age:23,
    sub:'CSE',
})
const changeValue=()=>{
    setValue({...value,
        name:'mostafizur rahman',
        age:value.age+1,
        sub:'CSE/Dhaka International University!',
    })
}
    return (
        <div className='text-center text-xl mt-4'> 
            <h3>{value.name}</h3>
            <p>{value.age}</p>
            <p><small>{value.sub}</small></p>
            <button className='btn btn-secondary' onClick={changeValue}>Change</button>
        </div>
    );
};

export default ObjectExamples;
import React from 'react';

const Card1 = (props) => {
    // console.log(props.item);
    const {name,character,episodes,img}= props
    // const {name,character,episodes,img}= props.item
    return (
        <div className='grid grid-cols-3 grid-gap-3 border border-indigo-600'>
            <h2>Name :{name}</h2>
            <h2>character :{character}</h2>
            <h2>episodes :{episodes}</h2>
            <img className='w-20' src={img} alt="" />
        </div>
    );
};

export default Card1;
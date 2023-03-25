import React from 'react';
import Image from './Image';
import Price from './Price';
import Title from './Title';
import "./Card.css"

const Card = (props) => {
    const myStyle = {
        backgroundColor: 'red',
    }
    const myObject = {
        name: 'Mostafizur Rahman!',
        age: 23
    }
    const {name , city}= props
    
    return (
        <div className=''>

            <img className='w-40 border-solid border-2 border-indigo-600' src="https://picsum.photos/seed/picsum/200/300" />
            <h2 style={myStyle}>$12500</h2>
            <p className='color'>ak47</p>

            <h1>Name :{myObject.name}</h1>
            <p>Age : {myObject.age}</p>

            <p>Another person Name </p>
            <h1>{name}</h1>
            <p>{city}</p>

            {/* <Image></Image>
            <Price></Price>
             <Title></Title> */}
        </div>
    );
};

export default Card;
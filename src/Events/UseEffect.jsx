import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [value, setValue] = useState([]);
    useEffect(() => {
        // fetch(`https://api.github.com/users`).then(res=>res.json()).then(data=>{
        //    setData(data)
        // })
        // const loadData =async()=>{
        //    const res =await fetch(`https://api.github.com/users`);
        //    const data = await res.json();
        //    setData(data);

        // };
        // loadData()
        const loadData = async () => {
            const {data} = await axios.get(`https://api.github.com/users`);
            // console.log(data)
            setValue(data);
           

        };
        loadData()
    }, [])
    console.log(value)
    return (
        <div className='text-center text-2xl'>
            <h2 >this is useEffect site</h2>
            {
                value.map((singleData) => {
                    return (
                        <div >
                            <img className='w-65' src={singleData.avatar_url} alt="" />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default UseEffect;
import React, { useState } from 'react';
import myObjArray from '../../text';
const ArrayExamples = () => {
    const [data, setData] = useState(myObjArray)
    // console.log(data)
    const handleSingleDataRemove= (episodes)=>{
       
        // const FilteredData = data.filter((d)=>d.episodes !== episodes);
        // console.log(FilteredData);
        setData(data.filter((d)=>d.episodes !== episodes));
    }
    return (
        <div>
            <div className='text-center mt-4'>
                {
                   data && data.map((singleData) =>
                        <>
                            <p>{singleData.name}</p>
                            <button onClick={()=>handleSingleDataRemove(singleData.episodes)} className='btn btn-info mt-4 btn=xs'>Remove</button>
                        </>
                    )
                }
            </div>
            <div className='text-center mt-4'>
                <button onClick={()=>setData([])} className='btn btn-accent'>RemoveAll</button>
                <input type="text" onChange={(e)=>console.log(e.target.value)} />
            </div>
        </div>
    );
};

export default ArrayExamples;
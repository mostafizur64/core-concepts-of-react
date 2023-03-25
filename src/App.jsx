import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Person from './components/NestedComponent/person'
import Message from './components/NestedComponent/Message'
import Image from './components/Card/Image'
import Price from './components/Card/Price'
import Title from './components/Card/Title'
import Card from './components/Card/Card'
import Card1 from './components/Card/Card1'
import myObjArray from '../text';
import Basic from './Events/Basic'
import ArrayExamples from './Events/ArrayExamples'
import ObjectExamples from './Events/ObjectExamples'
import UseEffect from './Events/UseEffect'

function App() {

  const myObj = {
    name: 'John Doe',
    age: 25,
    address: {
      city: 'New York',
      state: 'NY',
      country: 'USA'
    }
  }
  const myObj1 = {
    name: 'alison parker',
    age: 25,
    address: {
      city: 'New York',
      state: 'NY',
      country: 'USA'
    }
  }


  // 
  // const newArr = myObjArray.map(item=><p>{item.name}</p>)
  // // console.log(newArr)
  return (
    <div className="App">
      <Basic />
      <ObjectExamples/>
      <UseEffect/>
      <ArrayExamples />

      <Person></Person>
      <Message />
      <div className='grid grid-cols-3 grid-gap-2'>
        <Card name={myObj.name} city={myObj.address.city}></Card>
        <Card name={myObj1.name} city={myObj1.address.city}></Card>


      </div>
      {
        myObjArray.map(item => {
          // console.log(item);
          return (
            <Card1 {...item} key={item.episodes} />
          )
          {/* <Card1 item={item} /> */ }
          {/* <Card item={item} /> */ }


        }
          // <div> 
          //    <Card1 {...item} />
          //    {/* <Card1 item={item} /> */}
          //   {/* <Card item={item} /> */}
          //   </div>
        )
        // <>
        //    <p>{item.name}</p>
        //    <p>{item.character}</p>
        //    <p>{item.episodes}</p>
        // </>
      }
    </div>
  )
}

export default App

import { useState } from 'react';
import './App.css';
import data from './Data.js';

function App() {

 
  const [number,setNumber] = useState(1);
  const [text,setText] = useState([data]);

  const inputHandler = (event) =>{
    setNumber(event.target.value);
  
  }

  const submitHandler = (event)=>{
    event.preventDefault();
    let amount = parseInt(number)
    if(number<0){
       amount = 1
    }
    if(number>8){
      amount = 8
    }

    setText(data.slice(0,number));

  } 


  return (
    <section className='section-center'>
      <h2>Lorem Ipsum Paragraph</h2>
      <form onSubmit={submitHandler}>
        <input type='number' onChange={inputHandler}></input>
        <button className='btn'>Generate</button>
      </form>

      {text.map((Paragraph,index)=>{

       return <p key={index}>{Paragraph}</p>

      })}


    </section>
   
   
  );
}

export default App;

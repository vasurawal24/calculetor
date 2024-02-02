
import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');


  function data() {
    setValue1(value);
    setValue(' ');
  }
  function result() {
    try {
      if (value2 == 1) {
        setValue(parseFloat(value1) + parseFloat(value));
      }
      if (value2 == 2) {
        setValue(parseFloat(value1) - parseFloat(value));
      }
      if (value2 == 3) {
        setValue(parseFloat(value1) * parseFloat(value));
      }
      if (value2 == 4) {
        let temp = (parseFloat(value1) / parseFloat(value));
        if(temp == Infinity)
        {
          throw("No allow");
        } else {
          setValue(temp);
        }
      }
      if (value2 == 5) {
        setValue(parseFloat(value1) * parseFloat(value) / 100);
      }
    }
    catch(x){
      setValue(x);
    }

  }
  return (
    <>

      <div className='body'>
        <div className='dis'>
          <input type='text' value={value}></input><br></br>
        </div>

        <div className='number'>
          <input type='button' value={"C"} className='more' onClick={(e) => { setValue(' ') }}></input>
          <input type='button' value={"CE"} className='more' onClick={(e) => setValue(value.slice(0, -1))}></input>
          <input type='button' value="/" className='more' onClick={(e) => { setValue2('4'); setValue1(value); setValue(' ') }}></input>
          <input type='button' value="%" className='new' onClick={(e) => { setValue2('5'); setValue1(value); setValue(' ') }}></input><br></br>

          <input type='button' value={1} onClick={e => setValue(value + e.target.value)} ></input>
          <input type='button' value={2} onClick={e => setValue(value + e.target.value)}></input>
          <input type='button' value={3} onClick={e => setValue(value + e.target.value)}></input>
          <input type='button' value="*" className='new' onClick={(e) => { setValue2('3'); setValue1(value); setValue(' ') }}></input><br></br>

          <input type='button' value={4} onClick={e => setValue(value + e.target.value)}></input>
          <input type='button' value={5} onClick={e => setValue(value + e.target.value)}></input>
          <input type='button' value={6} onClick={e => setValue(value + e.target.value)}></input>
          <input type='button' value="-" className='new' onClick={(e) => { setValue2('2'); setValue1(value); setValue(' ') }}></input><br></br>

          <input type='button' value={7} onClick={e => setValue(value + e.target.value)}></input>
          <input type='button' value={8} onClick={e => setValue(value + e.target.value)}></input>
          <input type='button' value={9} onClick={e => setValue(value + e.target.value)}></input>


          <input type='button' value="+" className='new' onClick={(e) => { setValue2('1'); setValue1(value); setValue(' ') }}></input><br></br>
          <input type='button' value={0} onClick={e => setValue(value + e.target.value)}></input>
          <input type='button' value={"."} style={{ fontWeight: 'bolder' }} onClick={e => setValue(value + e.target.value)}></input>

          <input type='button' value="    =" className='new' style={{ paddingRight: '100px', fontSize: '30px', marginTop: '5px' }} onClick={result}></input>

        </div>

      </div>
    </>
  );
}

export default App;


import React, { useState, useEffect } from 'react';
import '/src/css/App.css';
import Axios from 'axios';
import Card from './Cards';

const App = () => {
  const [values, setValues] = useState();
  /* console.log(values); */

  const handleChangeValues = (event) => {
    setValues(prevEvent => ({
      ...prevEvent,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClickBtn = () => {
    Axios.post('http://localhost:3002/register', {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      console.log(response);
    })
  };

  useEffect(() => {
    Axios.get('http://localhost:3002/getCards').then((response) => {
      console.log(response);
    });
  }, [])

  return (
    <div className='app--container'>
      <div className="register--container">
        <h1 className="register--title">Screen Shop</h1>
        <input type="text"
          name='name'
          placeholder='Home'
          className='register--input' 
          onChange={handleChangeValues}
        />
        <input type="text"
          name='cost'
          placeholder='Preço'
          className='register--input' 
          onChange={handleChangeValues}
        />
        <input type="text"
          name='category'
          placeholder='Categoria'
          className='register--input' 
          onChange={handleChangeValues}
        />
        <button
          className='register--btn'
          onClick={() => handleClickBtn()}>Cadastrar
        </button>
      </div>
      <Card />
    </div>
  )

};

export default App;

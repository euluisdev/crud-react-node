import React, { useState, useEffect } from 'react';
import '/src/css/App.css';
import Axios from 'axios';
import Card from './Cards';

const App = () => {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();
  /* console.log(listGames); */

  const handleChangeValues = (value) => { //gets values ​​from all inputs
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }));
  };

  const handleClickBtn = () => { //insert data into url
    Axios.post('http://localhost:3002/register',
      {
        name: values.name,
        cost: values.cost,
        category: values.category,
      }).then(() => {
        setListGames([ 
          {
            id: values.idgames,
            name: values.name,
            cost: values.cost,
            category: values.category,
          },
          ...listGames,
        ]);
      })
  };

  useEffect(() => {
    Axios.get('http://localhost:3002/getCards').then((response) => {
      setListGames(response.data); //the response is inserted into setListGames
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

      {typeof listGames !== 'undefined' &&
        listGames.map((value) => {
          return <Card key={value.idgames}
            listCard={listGames}
            setListCard={setListGames}
            id={value.idgames} 
            name={value.name}
            cost={value.cost}
            category={value.category}
          ></Card>
        })
      }
    </div>
  )
};

export default App;

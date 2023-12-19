import { useState } from 'react'
import '/src/css/App.css'

const App = () => {
  const handleClickBtn = () => {
    console.log('Clicou!')
  };

  return <div className='app--container'>
    <div className="register--container">
      <h1 className="register--title">Screen Shop</h1>
      <input type="text" 
        name='name' 
        placeholder='Home' 
        className='register--input' 
      />
      <input type="text" 
        name='name' 
        placeholder='Home' 
        className='register--input' 
      />
      <input type="text" 
        name='name' 
        placeholder='Home' 
        className='register--input' 
      />
      <button 
        className='register--btn' 
        onClick={() => handleClickBtn()}>Cadastrar
      </button>
    </div>
  </div>
  
};

export default App;

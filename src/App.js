import React from 'react'
import NavBar from './components/navbar';
import GameBoard from './components/game';



function App() {

  localStorage.setItem('balance',1000)
  const values = [];
  for(let i=0;i<48;i++){
    values.push((i+1));
  }
  return (
    <React.Fragment>
      <NavBar></NavBar>
      
      <GameBoard values={values}/>
    </React.Fragment>
  );
}

export default App;

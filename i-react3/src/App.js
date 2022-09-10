// import logo from './logo.svg';
import './App.css';
// import Count from './components/Count';
// import { Card } from './components/Card';
import { useEffect , useCallback} from 'react';
import { useState } from 'react';
import List from './components/List';
import Storage  from './components/List';

 function App() {
//   const [name, setName] = useState('hello Adam')
//   // setName('Rasikh')
//   // const onCardClicked = () => {

//   //  console.log('hello') 
//   // }
// useEffect(() => {  
//   return () => {

//   }

// },[])

const [number, setNimber] = useState(1)
const [dark, setDark] = useState(false)
const getItems = useCallback(() => {
return [Number, Number + 1, Number +2]

}, [number])
const theme = {
backgroundColor: dark ? '#333' : '#FFF',
color: dark ? '#FFF' : '#333'

}

const [name, setName] = useState('')

  return (
    // <div className="App">
    //   <h1>start your work now</h1>
    //   {/* <Count increments={5} buttonColor={'red'}/>
    //   <Count increments={10} buttonColor={'green'}/> */}
    //   <Card name={name}   />
    // </div>,
    <div style={theme}>
      <input
      type= 'number'
      value={number}
      onChange={e => setNimber(parseInt(e.target.value))}
    />
    <button onClick={() => setDark(prevDark => !prevDark)}>
      toggle theme



    </button>

<List getItems={getItems}/>


    </div>,
    <input
    type='text'
    value = {name}
    onChange ={e => setName(e.target.value)}
    
    
    
    />
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';

function App() {
  const [tran, setTran] = useState('');
  const [value, setValue]= useState('i love react')


  useEffect(()=>{
      const url = 'https://text-translator2.p.rapidapi.com/translate';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '00ea2b41bfmshc204017a97a4d69p1d598ajsna8c701b5e84d',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    body: new URLSearchParams({
      source_language: 'en',
      target_language: 'ru',
      text: value
    })
  };
fetch(url, options)
.then(response => response.json())
.then(body=> setTran(body.data.translatedText))
 },[value]);





  return (
<>
  <h3>{tran}</h3>
  <form action=''>
  <input type="text" onChange={(e)=>{
    if(e.target.value!='')
setValue(e.target.value);
  }}/>
  {/* <button onClick={ (e) => {
    //отмена перезагрузки страницы
e.preventDefault();
console.log(e.target);
  } }>Перевести</button> */}
  </form>
</>
  );
}

export default App;

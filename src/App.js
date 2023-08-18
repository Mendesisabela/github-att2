import { useState } from 'react';
import Form from './componentes/Form/Form';
import Tweet from './componentes/Tweet/Tweet';

function App() {

  const tweets = [
    {
      selecionar: '',
  }
  ]

  const [caixas, setManos] = useState([])
  

  const tweetAdc = (caixa) => {
    console.log(caixa)
    setManos([...caixas, caixa])
  }


  return (
    <div className="App">
      <Form tweets={tweets.map(tweet => tweet.selecionar)} isabela={caixa => tweetAdc(caixa)}/>

      {tweets.map(tweet =><Tweet key={tweet.selecionar} selecionar={tweet.selecionar}
       caixas={caixas.filter(caixa => caixa.tweet === tweet.selecionar)}/>)}
    </div>
    
  );
}

export default App;

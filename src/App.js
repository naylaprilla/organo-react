import { useState } from 'react';
import Banner from './componentes/Banner';
import GuestCard from './componentes/GuestCard';
import Time from './componentes/Time';
import Rodape from './componentes/Rodapé';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      name: 'Grifinória',
      cor: '#ae0001',
    },
    {
      id: uuidv4(),
      name: 'Lufa-Lufa',
      cor: '#e0b322',
    },
    {
      id: uuidv4(),
      name: 'Corvinal',
      cor: '#222f5b',
    },
    {
      id: uuidv4(),
      name: 'Sonserina',
      cor: '#157247',
    }

  ])

  
  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      name: 'HERMIONE GRANGER',
      cargo: 'A bruxa mais inteligente de sua geração',
      imagem: 'https://1.bp.blogspot.com/_syquA7AjRJs/SNQ4Vuj4WmI/AAAAAAAAA4Q/LyRB4dIMh3Y/w1200-h630-p-k-no-nu/Hermione_Granger.jpg',
      time: times[0].name
    },
    {
      id: uuidv4(),
      favorito: false,
      name: 'HARRY POTTER',
      cargo: 'Possui uma forte inclinação a quebrar regras',
      imagem: 'https://www.eramuslim.com/framework/media/2015/03/6tbFBP4R.jpeg',
      time: times[0].name
    },
    {
      id: uuidv4(),
      favorito: false,
      name: 'RONIE WESLEY',
      cargo: 'Tem a profundidade de uma colher de chá',
      imagem: 'https://i.pinimg.com/originals/4e/5d/69/4e5d6933364bb527ba783c6ffa65712b.jpg',
      time: times[0].name
    },

    {
      id: uuidv4(),
      favorito: false,
      name: 'LUNA LOVEGOOD',
      cargo: 'Acho que pensam que sou meio excentrica',
      imagem: 'https://i.pinimg.com/736x/ad/a6/20/ada62062f7a30fff25a4dd6f49e6a588.jpg',
      time: times[2].name
    },

    

  ]

  const [colaboradores, setColaboradores] = useState(inicial)



  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))   
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <GuestCard 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.name)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}/>
      <section className='times'>
        <h1>Minha Organização</h1>
        {times.map((time, indice) => 
          <Time 
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime}
            key={indice} 
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.name)}
            aoDeletar={deletarColaborador}
          />
        )}         
      </section>
      <Rodape />      
    </div>
  );
}

export default App;

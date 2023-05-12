import { useState } from 'react';
import Banner from './componentes/Banner';
import GuestCard from './componentes/GuestCard';
import Time from './componentes/Time';
import Rodape from './componentes/Rodapé';

function App() {

  const times = [
    {
      name: 'Grifinória',
      primaryColor: '#c83b2c',
      secondaryColor: '#eddcda'
    },
    {
      name: 'Lufa-Lufa',
      primaryColor: '#e0b322',
      secondaryColor: '#e7ddbd'
    },
    {
      name: 'Corvinal',
      primaryColor: '#344c57',
      secondaryColor: '#c5d0d5'
    },
    {
      name: 'Sonserina',
      primaryColor: '#157247',
      secondaryColor: '#86988f'
    }

  ]

  const [colaboradores, setColaboradores] = useState([])

  const whenNewAddColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <GuestCard 
        times={times.map(time => time.name)}whenColaboradorCadastrado={colaborador => 
          whenNewAddColaborador(colaborador)}
      />

      {times.map(time => 
        <Time 
          key={time.name} 
          name={time.name} 
          primaryColor={time.primaryColor} 
          secondaryColor={time.secondaryColor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.name)}
        />
      )}

      <Rodape />
      
    </div>
  );
}

export default App;

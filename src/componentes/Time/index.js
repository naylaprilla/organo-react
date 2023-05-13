import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({time, colaboradores, aoDeletar}) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png', backgroundColor: time.primaryColor }}>
            <h3 style={{ borderColor: time.secondaryColor }}>{time.name}</h3>
            <div className='colaboradores' >
                {colaboradores.map((colaborador, indice )=> {
                    return <Colaborador 
                        backColor={time.SecondaryColor} 
                        key={indice} 
                        colaborador={colaborador}
                        aoDeletar={aoDeletar}
                        />
                    }                    
                )}
            </div>
        </section>
    )
}

export default Time
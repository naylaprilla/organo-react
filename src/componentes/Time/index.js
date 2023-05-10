import Colaborador from '../Colaborador'
import './Time.css'

const House = (props) => {
    const css = { backgroundColor: props.secondaryColor }

    return (
        props.colaboradores.length > 0 && <section className='time' style={css}>
            <h3 style={{ borderColor:props.primaryColor }}>{props.name}</h3>
            <div className='colaboradores' >
                {props.colaboradores.map(colaborador => <Colaborador backColor={props.primaryColor} key={colaborador.name} name={colaborador.name} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default House
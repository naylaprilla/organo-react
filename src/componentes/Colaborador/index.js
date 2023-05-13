import { AiFillCloseCircle } from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ({ colaborador, backColor, aoDeletar }) => {
    return (
        <div className='colaborador' >
                <AiFillCloseCircle size={25} className='deletar' onClick={aoDeletar}/>
                <div className='cabecalho' style={{ backgroundColor:backColor }}>
                <img src={colaborador.imagem} alt={colaborador.name}/>
            </div>
            <div className='rodape'>
                <h4>{colaborador.name}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador
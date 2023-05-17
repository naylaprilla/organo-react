import './Field.css'

const Field = ({label, placeholder, valor, whenChanged, mandatory = false}) => {
    
    return (
    <div className="field" >
        <label>{label}</label>
        <input value={valor} onChange={evento => whenChanged(evento.target.value)} required={mandatory} placeholder={placeholder}/>
    </div>
    )
}

export default Field
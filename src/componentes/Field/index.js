import './Field.css'

const Field = ({ type ='text', label, placeholder, valor, whenChanged, mandatory = false}) => {
    
    return (
    <div className={`field field-${type}`} >
        <label>{label}</label>
        <input  
            type={type} 
            value={valor} 
            onChange={evento => whenChanged(evento.target.value)} 
            required={mandatory} 
            placeholder={placeholder}
        />
    </div>
    )
}

export default Field
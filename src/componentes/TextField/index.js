import './TextField.css'

const TextField = ({label, placeholder, valor, whenChanged, mandatory = false}) => {
    
    return (
    <div className="text__field" >
        <label>{label}</label>
        <input value={valor} onChange={evento => whenChanged(evento.target.value)} required={mandatory} placeholder={placeholder}/>
    </div>
    )
}

export default TextField
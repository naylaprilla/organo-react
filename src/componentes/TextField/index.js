import './TextField.css'

const TextField = (props) => {

    const placeholderChange = `${props.placeholder}...`
    

    const whenTyped = (evento) => {
        props.whenChanged(evento.target.value)
    } 

    return (
    <div className="text__field" >
        <label>{props.label}</label>
        <input value={props.valor} onChange={whenTyped} required={props.mandatory} placeholder={placeholderChange}/>
    </div>
    )
}

export default TextField
import { useState } from 'react'
import './TextField.css'

const TextField = (props) => {

    const placeholderChange = `${props.placeholder}...`
    

    const whenTyped = (evento) => {
        setValor(evento.target.value)
        console.log(valor)
    } 

    return (
    <div className="text__field" >
        <label>{props.label}</label>
        <input value={valor} onChange={whenTyped} required={props.mandatory} placeholder={placeholderChange}/>
    </div>
    )
}

export default TextField
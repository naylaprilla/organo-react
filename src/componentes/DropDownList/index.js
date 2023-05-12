import './DropDownList.css'

const DropDownList = (props) => {
    return (
        <div className="drop-down-list">
            <label>{props.label}</label>
            <select onChange={evento => props.whenChanged(evento.target.value)} required={props.required} value={props.valor} >
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}

            </select>
        </div>
    )
}

export default DropDownList
import { useState } from "react"
import Button from '../Button'
import TextField from '../TextField'
import DropDownList from '../DropDownList'
import './GuestCard.css'


const GuestCard = (props) => {
    
    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImage] = useState('')
    const [time, setTime] = useState('')

    const whenSave = (evento) => {
        evento.preventDefault()
        props.whenColaboradorCadastrado({
            name,
            cargo,
            imagem,
            time
        })
        setName('')
        setCargo('')
        setImage('')
        setTime('')
    }


    return (
        <section className="guest__card">
            <form onSubmit={whenSave}>
                <h2>Preencha os dados para criar o card do seu personagem</h2>
                <TextField 
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={name}
                    whenChanged={valor => setName(valor)}
                />
                <TextField 
                    mandatory={true} 
                    label="Especialidade" 
                    placeholder="Digite seu feitiço preferido"
                    valor={cargo}
                    whenChanged={valor => setCargo(valor)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço url da imagem"
                    valor={imagem}
                    whenChanged={valor => setImage(valor)}
                />
                <DropDownList 
                    madatory={true} 
                    label="Casa" 
                    itens={props.times}
                    valor={time}
                    whenChanged={valor => setTime(valor)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default GuestCard
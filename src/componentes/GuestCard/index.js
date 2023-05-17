import { useState } from "react"
import Button from '../Button'
import Field from '../Field'
import DropDownList from '../DropDownList'
import './GuestCard.css'


const GuestCard = ({aoCadastrar, times, cadastrarTime}) => {
    
    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImage] = useState('')
    const [time, setTime] = useState('')
    const [nameTime, setNameTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const whenSubmit = (evento) => {
        evento.preventDefault()
        console.log('form enviado', name, cargo, imagem, time)
        aoCadastrar({
            name,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="guest__card-container">
            <form className="guest__card" onSubmit={whenSubmit}>
                <h2>Preencha os dados para criar o card do seu personagem</h2>
                <Field 
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={name}
                    whenChanged={valor => setName(valor)}
                />
                <Field 
                    mandatory={true} 
                    label="Especialidade" 
                    placeholder="Digite seu feitiço preferido"
                    valor={cargo}
                    whenChanged={valor => setCargo(valor)}
                />
                <Field 
                    label="Imagem" 
                    placeholder="Digite o endereço url da imagem"
                    valor={imagem}
                    whenChanged={valor => setImage(valor)}
                />
                <DropDownList 
                    madatory={true} 
                    label="Casa" 
                    itens={times}
                    valor={time}
                    whenChanged={valor => setTime(valor)}
                />
                <Button texto='Criar Card'/>
            </form>
            <form className="guest__card" onSubmit={(evento) => { 
                evento.preventDefault()
                cadastrarTime({ name: nameTime, cor: corTime})
            }}>
                <h2>Aqui você pode criar uma nova casa para Hogwarts</h2>
                <Field 
                    mandatory
                    label="Nome" 
                    placeholder="Digite o nome da casa"
                    valor={nameTime}
                    whenChanged={valor => setNameTime(valor)}
                />
                <Field 
                    mandatory
                    label="Cor" 
                    placeholder="Digite a cor da sua casa"
                    valor={corTime}
                    whenChanged={valor => setCorTime(valor)}
                />
                <Button texto='Criar uma nova casa'/>
            </form>
        </section>
    )
}

export default GuestCard
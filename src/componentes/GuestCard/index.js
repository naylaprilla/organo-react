import Button from '../Button'
import DropDownList from '../DropDownList'
import TextField from '../TextField'
import './GuestCard.css'
import { useState } from "react"


const GuestCard = (props) => {
    const times =[
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão',
    ]

    const [nome, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImage] = useState('')

    const whenSave = (evento) => {
        evento.preventDefault()
        console.log('O formulário foi submetido', nome, cargo, imagem)
    }


    return (
        <section className="guest__card">
            <form onSumit={whenSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    whenChange={valor => setName(valor)}
                />
                <TextField 
                    mandatory={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    whenChange={valor => setCargo(valor)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço url da imagem"
                    valor={imagem}
                    whenChange={valor => setImage(valor)}
                />
                <DropDownList madatory={true} label="Time" itens={times}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default GuestCard
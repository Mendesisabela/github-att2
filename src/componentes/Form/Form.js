import './Form.css'
import Elementos from '../Elementos/Elementos'
import Botao from '../Botao/Botao'
import { useState } from 'react'

const Form = (props) => {

    const [selecionar, setselecionar] = useState('')
    const [tweet] = useState('')

    const Salvo = (show) => {
        show.preventDefault()
        props.isabela({
            selecionar,
            tweet
        })
    }
    

    return(
        <section className='form'>
            <form onSubmit={Salvo}>
                <Elementos obrigatorio={true} label="" placeholder="Digite aqui o que você está pensando..." valor={selecionar} mudar={valor => setselecionar(valor)}/>
                
                <Botao>
                    Enviar
                </Botao>
            </form>
        </section>
    )
}



export default Form
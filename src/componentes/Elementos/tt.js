import './Elementos.css'
import { useState } from 'react'

const Elementos = (props) => {
    const [valor, setValor] = useState('')
    const escrever = (show) => {
        setValor(show.target.value)
        console.log(valor)
    }
    
    return(
        <div className='Elementos'>
            <input value={valor} onChange={escrever} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}
export default Elementos
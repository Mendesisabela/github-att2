import './Elementos.css'

const Elementos = (props) => {
    
    const escrever = (show) => {
        props.mudar(show.target.value)
    }

    return(
        <div className='Elementos'>
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={escrever} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default Elementos
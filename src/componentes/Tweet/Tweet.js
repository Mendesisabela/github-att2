import Caixa from '../Caixa/Caixa'
import './Tweet.css'

const Tweet = (props) => {
    return (
       (props.caixas.length > 0) && <section className='tweet' style={{ backgroundColor: props.topo} }>
            <h3 style={{ borderColor: props.fundo}} >{props.selecionar}</h3>

            <div className='caixas'>
            {props.caixas.map(caixa =><Caixa selecionar={caixa.selecionar}/>)}
            
            </div>
        </section>
       
    )
} 

export default Tweet
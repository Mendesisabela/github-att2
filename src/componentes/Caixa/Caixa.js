import './Caixa.css'

const Caixa = (props) => {

    return(
    <div className='caixa'>
        <div className='topo'>
          <img src="https://i.pinimg.com/564x/1d/7f/65/1d7f6564b3aa998be98c957f9572c46f.jpg" alt="png"/>
            <b>Mendes</b>
        </div>

        <div className='final'>
            <h4>{props.selecionar}</h4>
        </div>
    </div>
        )
}

export default Caixa
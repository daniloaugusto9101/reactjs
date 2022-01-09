import PropTypes from 'prop-types'
import styles from './Frase.module.css'

function Frase({nome}){
    return(
        <div>
            <p className={styles.paragrafo}>Olá Mundo!</p>
            <p>Bem-vindo, {nome}</p>
        </div>
    )
}


Frase.propTypes = {
    nome: PropTypes.string.isRequired,
}

Frase.defaultProps = {
    nome: "Nome não informado",
}


export default Frase
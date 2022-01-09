import Styles from './Frase.module.css'

function Frase(){
    return(
        <div className={Styles.FraseContainer}>
            <p className={Styles.FraseContent}> Frase do componente</p>
        </div>
    )
}

export default Frase;


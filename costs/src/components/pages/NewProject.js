import ProjectForm from '../project/ProjectForm'
import styles from './NewProjetc.module.css'

function NewProjetc(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu prmeiro projetos para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar projeto"/>
        </div>
    )
}

export default NewProjetc
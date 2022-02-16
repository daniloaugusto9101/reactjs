import ProjectForm from "../project/ProjectForm";

import styles from './NovoProjeto.module.css';

function NovoProjeto() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar projetos"/>
        </div>
    )
}
export default NovoProjeto
import { useNavigate } from 'react-router-dom'

import ProjectForm from "../project/ProjectForm";

import styles from './NovoProjeto.module.css';

function NovoProjeto() {

    const history = useNavigate();

    function createPost(project) {
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projetos", {
            method: "POST",
            headers: {
                "Content-type": "aplication/json",
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                history("/projetos", { message: "Projeto criado com sucesso!" })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projetos" />
        </div>
    )
}
export default NovoProjeto
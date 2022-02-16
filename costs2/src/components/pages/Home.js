import styles from './Home.module.css';

import {Link} from 'react-router-dom';

import savings from '../../img/savings.svg';

import LinkButton from '../layout/LinkButton';

function Home(){
    return(
        <section className={styles.home_catainer}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar sus projetos agora mesmo</p>
            <LinkButton to="/novosprojetos" text="Criar projetos"/>
            <img src={savings} alt="" />
        </section>
    )
}

export default  Home
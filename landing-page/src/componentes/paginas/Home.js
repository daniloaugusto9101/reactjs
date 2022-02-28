import styles from './Home.module.css';

import ImgHome from '../../img/robo.svg'
import Button from '../forms/Button';
import Container from '../layouts/Container';


function Home() {
    return (
        <Container className="min-height">
            <section className={styles.sPrincipal}>
                <div>
                    <h1>Balle Bot</h1>
                    <p>Deixe a sua comunidade segura de um jeito fácil</p>
                    <Button />
                </div>
                <img src={ImgHome} alt="Imagem da Home" />
            </section>
            <section className={styles.sTexto}>
                <h2>O que ela faz por você?</h2>
                <p>1. Cria um sistema de verificação capcha para novos membros garantirem que não são robôs</p>
                <p>2. Possui um sistema de banimento automático para links suspeitos que forem enviados na comunidade</p>
                <p>3. Sistema de avisos e banimento manual, para pessoas administradoras utilizarem</p>
            </section>
        </Container>
    )
}

export default Home
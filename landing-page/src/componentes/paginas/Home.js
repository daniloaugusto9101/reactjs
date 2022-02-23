import styles from './Home.module.css';

import Containee from '../layouts/Container'
import ImgHome from '../../img/robo.svg'

function Home(){
    return(
        <main>
            <section>
                <h1>Balle Bot</h1>
                <h2>Deixe a sua comunidade segura de um jeito fácil</h2>
                <button>Me adicione!</button>
            </section>
            <section>
                <img src={ImgHome} alt="Imagem da Home" />
            </section>
        </main>
    )
}

export default Home
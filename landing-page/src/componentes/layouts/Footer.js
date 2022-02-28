import Container from "./Container";
import LogoFooter from '../../img/logoFooter.svg'

import styles from './Footer.module.css'

function Footer(){
    return(
        <footer>
            <Container>
                <img src={LogoFooter} alt="Logo do rodapé" className={styles.footer_img}/>
            </Container>
        </footer>
    )
}

export default Footer
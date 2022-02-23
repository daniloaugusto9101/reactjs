import Container from "./Container";
import LogoFooter from '../../img/logoFooter.svg'

function Footer(){
    return(
        <footer>
            <Container>
                <img src={LogoFooter} alt="Logo do rodapé" />
            </Container>
        </footer>
    )
}

export default Footer
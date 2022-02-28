import { Link } from 'react-router-dom';
import Logo from '../../img/logo.svg';

import Container from './Container'

import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <nav className={styles.menu}>
                <Container>
                    <Link to="/"><img src={Logo} alt="Logo" /></Link>
                    <ul className={styles.menu_item}>
                        <li className={styles.menu_lista}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.menu_lista}>
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        <li className={styles.menu_lista}>
                            <Link to="/contato">Contato</Link>
                        </li>
                    </ul>
                </Container>
            </nav>
        </header>
    )
}
export default Header
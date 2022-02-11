import { Link } from 'react-router-dom';

import Container from './Container';

import Logo from '../../img/costs_logo.png'

import styles from './Navbar.module.css'


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={<Logo />} alt="Logo" />
                </Link>
                <ul className={styles.item}>
                    <li className={styles.list}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.list}>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className={styles.list}>
                        <Link to="/contato">Contato</Link>
                        <Link to="/novoprojeto">Novo Projeto</Link>
                    </li>
                    <li className={styles.list}>
                        <Link to="/novoprojeto">Novo Projeto</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}
export default Navbar
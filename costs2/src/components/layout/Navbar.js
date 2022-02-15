import { Link } from 'react-router-dom';

import Container from './Container';

function Navbar() {
    return (
        <nav className='menu'>
            <Container>
                <ul className='item'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li>
                        <Link to="/empresa">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/novoprojeto">Novo Projeto</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar
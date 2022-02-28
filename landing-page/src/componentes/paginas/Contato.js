import Container from '../layouts/Container'
import styles from './Contato.module.css'

function Contato() {
    return (
        <Container nClas="min-height">
            <div className={styles.contato}>
                <h1 >Contato</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet modi, fugiat dolorem corrupti quod corporis dolorum suscipit expedita exercitationem! Distinctio consectetur eveniet accusamus quaerat iure dolorum dolor modi dolore.
                </p>
            </div>
        </Container>
    )
}

export default Contato
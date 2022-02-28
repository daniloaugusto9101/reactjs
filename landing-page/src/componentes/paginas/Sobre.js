import Container from '../layouts/Container'
import styles from './Sobre.module.css'

function Sobre() {
    return (
        <Container nClas="min-height">
            <div className={styles.sobre}>
                <h1 >Sobre</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet modi, fugiat dolorem corrupti quod corporis dolorum suscipit expedita exercitationem! Distinctio consectetur eveniet accusamus quaerat iure dolorum dolor modi dolore.
                </p>
            </div>
        </Container>
    )
}

export default Sobre
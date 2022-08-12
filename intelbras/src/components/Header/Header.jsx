import styles from './Header.module.css'

export const Header = () =>{
    return(
        <header className={styles.header}>
            <h1 className={styles.h1}>DevInBras</h1>
            <ul className={styles.ul}>
                <li>Início</li>
                <li>Produtos</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
            <button className={styles.button}>Sair</button>
        </header>
        
    )
}
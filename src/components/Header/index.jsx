import { FaDollarSign } from "react-icons/fa";
import styles from './style.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>My Finances<FaDollarSign style={{ color: '#49AA26' }} /> </h1>
        </header>
    )
}
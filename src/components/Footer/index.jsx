import { FaDollarSign } from "react-icons/fa";
import styles from './style.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>My Finances<FaDollarSign style={{ color: '#49AA26' }} /> </p>
        </footer>
    )
}
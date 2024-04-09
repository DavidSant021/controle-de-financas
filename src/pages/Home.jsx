import AddTransaction from "../components/AddTransaction";
import ContentCards from "../components/ContentCards";
import { Outlet } from "react-router-dom";
import styles from './home.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <ContentCards />
            <AddTransaction />
            <Outlet />
        </main>
    )
}
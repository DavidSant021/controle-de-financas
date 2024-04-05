import { useContext } from "react"
import ButtonDelete from "../../components/ButtonDelete"
import { ValueContext } from "../../context/ValueContext"
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown} from 'react-icons/fa'
import styles from './style.module.css'
import { Link } from "react-router-dom"

export default function InfoArea() {

    const { transactions } = useContext(ValueContext)

    return (
        <table className={styles.table}>
            <tbody>
                <tr>
                    <th className={styles.th} >Descrição</th>
                    <th className={styles.th} >Valor</th>
                    <th className={styles.th} >Tipo</th>
                </tr>
                {transactions.map(t => (
                    <tr key={t.id}>
                        <td className={styles.td} >{t.description}</td>
                        <td className={styles.td} >{t.value}</td>
                        <td className={styles.td} >{
                            t.type ? <FaRegArrowAltCircleUp className={styles.arrowUp} /> : <FaRegArrowAltCircleDown className={styles.arrowDonw} />
                        }
                            <ButtonDelete
                                className={styles.trash}
                                transactionId={t.id}
                            />
                            <Link to={`transaction/${t.id}`} className={styles.viewButton} >
                                Vizualizar
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
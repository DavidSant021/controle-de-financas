import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { ValueContext } from "../../context/ValueContext"
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown} from 'react-icons/fa'
import { format } from "date-fns"
import styles from './style.module.css'

export default function ShowTransaction() {
    const { id } = useParams()
    const { transactions } = useContext(ValueContext)

    const transaction = transactions.find(t => t.id === +id)

    // Formatando a data usando date-fns
    const formattedDate = format(new Date(transaction.createdAt), 'dd/MM/yyyy HH:mm:ss');

    const formattedValue = Number(transaction.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <div key={transaction.id} className={styles.container}>
            <table className={styles.transactionTable}>
                <tbody>
                    <tr>
                        <th className={styles.th}>Nome</th>
                        <th className={styles.th}>Valor</th>
                        <th className={styles.th}>Tipo</th>
                        <th className={styles.th}>Data</th>
                    </tr>
                    <tr>
                        <td className={styles.td}>{transaction.description}</td>
                        <td className={styles.td}>{formattedValue}</td>
                        <td className={styles.td}>
                            {
                                transaction.type ? <FaRegArrowAltCircleUp className={styles.arrowUp} /> : <FaRegArrowAltCircleDown className={styles.arrowDown} />
                            }
                        </td>
                        <td className={styles.td}>{formattedDate}</td>
                    </tr>
                </tbody>
            </table>
            <Link to='/' className={styles.returnButton} >Voltar</Link>
        </div>
    )
}
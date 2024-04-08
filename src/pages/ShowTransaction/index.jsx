import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { ValueContext } from "../../context/ValueContext"
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa'
import { format, addDays } from "date-fns"
import styles from './style.module.css'
import Table from 'react-bootstrap/Table';

export default function ShowTransaction() {
    const { id } = useParams()
    const { transactions } = useContext(ValueContext)

    const transaction = transactions.find(t => t.id === +id)

    const nextDayDate = addDays(new Date(transaction.createdAt), 1);
    const formattedNextDayDate = format(nextDayDate, 'dd/MM/yyyy');

    const formattedValue = Number(transaction.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <>
            <div className="container-fluid">
                <Table responsive className={styles.transactionTable}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Descrição</th>
                            <th className={styles.th}>Valor</th>
                            <th className={styles.th}>Tipo</th>
                            <th className={styles.th}>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles.td}>{transaction.description}</td>
                            <td className={styles.td}>{formattedValue}</td>
                            <td className={styles.td}>
                                {
                                    transaction.type ? <FaRegArrowAltCircleUp className={styles.arrowUp} /> : <FaRegArrowAltCircleDown className={styles.arrowDown} />
                                }
                            </td>
                            <td  className={styles.td}>{formattedNextDayDate}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Link to='/' className={styles.returnButton} >Voltar</Link>
        </>
    )
}
import { useContext } from "react"
import ButtonDelete from "../../components/ButtonDelete"
import { ValueContext } from "../../context/ValueContext"
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa'
import styles from './style.module.css'
import { Link } from "react-router-dom"
import Table from 'react-bootstrap/Table';

export default function InfoArea() {

    const { transactions } = useContext(ValueContext)

    const formattedValue = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <>
            <div className="container-fluid">
                <Table responsive className={styles.transactionTable}>
                    <thead>
                        <tr>
                            <th className={styles.th} >Descrição</th>
                            <th className={styles.th} >Valor</th>
                            <th className={styles.th} >Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(t => (
                            <tr key={t.id}>
                                <td className={styles.td} >{t.description}</td>
                                <td className={styles.td} >{formattedValue(+t.value)}</td>
                                <td className={`${styles.td} ${styles.tdTrash}`} >{
                                    t.type ? <FaRegArrowAltCircleUp className={styles.arrowUp} /> : <FaRegArrowAltCircleDown className={styles.arrowDown} />
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
                </Table>
            </div>
        </>
    )
}
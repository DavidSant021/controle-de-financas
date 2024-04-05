import { useContext } from "react"
import { ValueContext } from "../../context/ValueContext"
import { FaTrash } from 'react-icons/fa'
import styles from './style.module.css'

export default function ButtonDelete({transactionId, className}) {
    const {deleteTransaction} = useContext(ValueContext)

    function delTransaction() {
        deleteTransaction(transactionId)
    }

    return (
        <FaTrash className={`${styles.trashButton} ${className}`} onClick={delTransaction} />
    )
}
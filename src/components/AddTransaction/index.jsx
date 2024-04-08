import { useContext, useRef, useState } from "react"
import Transaction from "../../entities/Transaction"
import { ValueContext } from "../../context/ValueContext"
import styles from './style.module.css'
import Form from 'react-bootstrap/Form';
import Modal from "../Modal";

export default function AddTransaction() {
    const defaultTransaction = {
        description: '',
        value: "",
        type: null,
        createdAt: ''
    }

    const [transaction, setTransaction] = useState(defaultTransaction)
    const [selectedType, setSelectedType] = useState(null)
    const [open, setOpen] = useState(false)
    const [modalType, setModalType] = useState(false)

    const formRef = useRef(null);

    const { addTransaction } = useContext(ValueContext)

    function handleSubmit(ev) {
        ev.preventDefault()

        if (!selectedType) {
            setModalType(false)
            setOpen(true)
            return
        }

        try {
            const validTransaction = new Transaction(transaction)
            setTransaction(validTransaction)
            addTransaction(validTransaction)
            setModalType(true)
            setOpen(true)
        } catch (error) {
            console.log(error)
        } finally {
            setTransaction(defaultTransaction)
            formRef.current.reset()
            setSelectedType(null)
        }

    }

    const handleChange = (ev) => {
        setTransaction((current) => ({ ...current, [ev.target.name]: ev.target.value }))
    }

    const handleSelectChange = (ev) => {
        const selectedType = ev.target.value;
        const typeValue = selectedType === 'entrada' ? true : false;
        setTransaction((current) => ({ ...current, type: typeValue }));
        setSelectedType(selectedType)
    }

    return (
        <>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={styles.addTransactionAria}
            >
                <div className={styles.inputsContent}>
                    <input
                        type="text"
                        className={styles.input}
                        name="description"
                        id="description"
                        placeholder="Descrição"
                        required
                        value={transaction.description}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        step={0.01}
                        className={styles.input}
                        name="value"
                        id="value"
                        placeholder="Valor"
                        required
                        value={transaction.value}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputsContent}>
                    <Form.Select
                        className={styles.select}
                        aria-label="Default select example"
                        onChange={handleSelectChange}
                    >
                        <option>
                            Tipo de Transação
                        </option>
                        <option value="entrada">
                            Entrada
                        </option>
                        <option value="saida">
                            Saída
                        </option>
                    </Form.Select>
                    <input
                        className={styles.inputData}
                        type="date"
                        name="createdAt"
                        id="created"
                        required
                        value={transaction.createdAt}
                        onChange={handleChange}
                    />
                </div>
                <button className={styles.addButton}>Adicionar</button>
            </form>
            <Modal
                isOpen={open}
                setOpen={setOpen}
                modalType={modalType}
            />
        </>
    )
}
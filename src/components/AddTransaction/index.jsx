import { useContext, useRef, useState } from "react"
import Transaction from "../../entities/Transaction"
import { ValueContext } from "../../context/ValueContext"
import styles from './style.module.css'
import Form from 'react-bootstrap/Form';

export default function AddTransaction() {
    const defaultTransaction = {
        description: '',
        value: "",
        type: null
    }

    const [transaction, setTransaction] = useState(defaultTransaction)
    const [selectedType, setSelectedType] = useState(null)
    const desc = useRef(null)
    const formRef = useRef(null);
    const { addTransaction } = useContext(ValueContext)

    function handleSubmit(ev) {
        ev.preventDefault()

        if (!selectedType) {
            alert('Por favor, selecione o tipo de transação (entrada ou saída).');
            return
        }

        try {
            const validTransaction = new Transaction(transaction)
            setTransaction(validTransaction)
            addTransaction(validTransaction)
        } catch (error) {
            console.log(error)
        } finally {
            setTransaction(defaultTransaction)
            formRef.current.reset()
            desc.current.focus()
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
                <div className={styles.inputContent}>
                    <label htmlFor="description">Descrição</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        required
                        ref={desc}
                        value={transaction.description}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputContent}>
                    <label htmlFor="value">Valor</label>
                    <input
                        type="number"
                        step={0.01}
                        name="value"
                        id="value"
                        required
                        value={transaction.value}
                        onChange={handleChange}
                    />
                </div>
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
                <button className={styles.addButton}>Adicionar</button>
            </form>
        </>
    )
}
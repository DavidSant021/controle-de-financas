import { useContext, useRef, useState } from "react"
import Transaction from "../../entities/Transaction"
import { ValueContext } from "../../context/ValueContext"
import styles from './style.module.css'

export default function AddTransaction() {
    const defaultTransaction = {
        description: '',
        value: 0,
        type: null
    }

    const [transaction, setTransaction] =useState(defaultTransaction)
    const desc = useRef(null)
    const formRef = useRef(null);
    const {addTransaction} = useContext(ValueContext)

    function handleSubmit(ev) {
        ev.preventDefault()

        if (transaction.type === null) {
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
        }

    }

    const handleChange = (ev) => {
        setTransaction((current) => ({...current, [ev.target.name]: ev.target.value}))
    }

    const handleRadioChange = (ev) => {
        const selectedType = ev.target.value;
        const typeValue = selectedType === 'entrada' ? true : false;
        setTransaction((current) => ({...current, type: typeValue}));
    }

    return (
        <div className={styles.container}>
            <form ref={formRef} onSubmit={handleSubmit} className={styles.addTransactionAria}>
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
                <div className={styles.inputRadioContent}>
                    <div>
                        <input
                            type="radio"
                            name="type"
                            id="input"
                            value='entrada'
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="input">Entrada</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="type"
                            id="output"
                            value='saida'
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="output">Saída</label>
                    </div>
                </div>
                <button className={styles.addButton}>Adicionar</button>
            </form>
        </div>
    )
}
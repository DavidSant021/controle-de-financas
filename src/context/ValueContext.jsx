import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ValueContext = createContext({})

ValueContextProvider.propTypes = {
    children: PropTypes.node
}

export default function ValueContextProvider({ children }) {
    const [transactions, setTransactions] = useState(() => {
        const savedTransactions = localStorage.getItem('transactions')
        if (!savedTransactions) return []
        const transactions = JSON.parse(savedTransactions)
        return transactions
    })

    const addTransaction = (transaction) => {
        setTransactions(currentState => {
            const updatedTransactions = [transaction, ...currentState]
            localStorage.setItem('transactions', JSON.stringify(updatedTransactions))
            return updatedTransactions
        })
    }

    const deleteTransaction = (transactionId) => {
        setTransactions(currentState => {
            const updatedTransactions = currentState.filter(t => t.id !== transactionId)
            localStorage.setItem('transactions', JSON.stringify(updatedTransactions))
            return updatedTransactions
        })
    }

    const operations = {
        addTransaction,
        deleteTransaction,
        transactions
    }

    return (
        <ValueContext.Provider value={operations}>
            {children}
        </ValueContext.Provider>
    )
}
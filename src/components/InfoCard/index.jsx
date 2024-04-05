import styles from './style.module.css'

export default function InfoCard({ children, infoText, quantity }) {
    // Formata o valor da quantidade como um valor monetário
    const formattedQuantity = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(quantity.toFixed(2));

    return (
        <div className={styles.infoContent}>
            <div className={styles.categoryContent}>
                <p>{infoText}</p>
                <span>{children}</span>
            </div>
            <p className={styles.valueContent}>{formattedQuantity}</p>
        </div>
    )
}
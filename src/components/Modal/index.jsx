import styles from './style.module.css'
import { IoCloseOutline } from "react-icons/io5"
import { FaCheck } from "react-icons/fa"
import PropTypes from 'prop-types'

Modal.propTypes = {
    isOpen: PropTypes.bool,
    setOpen: PropTypes.func,
    modalType: PropTypes.bool
}

export default function Modal({ isOpen, setOpen, modalType }) {
    if (isOpen) {

        if (modalType) {
            return (
                <div className={styles.background}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <span>Aviso!</span>
                            <IoCloseOutline
                                onClick={() => setOpen(!isOpen)}
                                className={styles.icon}
                            />
                        </div>
                        <div className={styles.modalBody}>
                            <span>Sua transação foi salva com sucesso!</span>
                            <div className={styles.contentCheck}>
                                <FaCheck className={styles.check} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles.background}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeaderError}>
                            <span>Aviso!</span>
                            <IoCloseOutline
                                onClick={() => setOpen(!isOpen)}
                                className={styles.icon}
                            />
                        </div>
                        <div className={styles.modalBodyError}>
                            <span>Informe os dados corretamente!</span>
                            <div className={styles.contentErrorIcon}>
                                <IoCloseOutline className={styles.errorIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return null
}
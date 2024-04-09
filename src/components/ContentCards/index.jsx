import { useContext } from "react";
import InfoCard from "../InfoCard";
import { ValueContext } from "../../context/ValueContext";
import styles from './style.module.css'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown} from 'react-icons/fa'
import { FaDollarSign } from "react-icons/fa6";

export default function ContentCards() {
    const { transactions } = useContext(ValueContext)

    const entrys = transactions.filter(t => t.type)
    const totalEntrys = entrys.reduce((sum, t) => sum + +t.value, 0)

    const exits = transactions.filter(t => !t.type)
    const totalExits = exits.reduce((sum, t) => sum + +t.value, 0)

    const totalValue = totalEntrys - totalExits

    return (
        <div className={styles.container}>
            <InfoCard isGreen={false}  infoText="Entradas" quantity={totalEntrys} >
                <FaRegArrowAltCircleUp className={styles.iconEntry} />
            </InfoCard>
            <InfoCard isGreen={false}  infoText="Saídas" quantity={totalExits} >
                <FaRegArrowAltCircleDown className={styles.iconExit} />
            </InfoCard>
            <InfoCard isGreen={true} infoText="Total" quantity={totalValue} >
                <FaDollarSign className={styles.icon} />
            </InfoCard>
        </div>
    )
}
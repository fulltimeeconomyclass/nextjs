import Floor1 from './Floor1'
import Floor2 from './Floor2'
import Floor3 from './Floor3'

import styles from '../../styles/Machine.module.css'

export default function SvgMap({floor, fill, stroke}) {
    return (
        <div className={styles.svg_container}>
            {(() => {
                switch (floor) {
                    case "1":
                        return <Floor1/>
                    case "2":
                        return <Floor2/>
                    case "3":
                        return <Floor3/>
                    default:
                        return <Floor1/>
                }
            })()}
        </div>
    )
}
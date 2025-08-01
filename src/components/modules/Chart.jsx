import { useState } from "react";
import { convertData } from "../../helpers/convertData.js"
import styles from "./Chart.module.css"
function Chart({chart , setChart}) {
    const [type , setType] = useState("prices") ; 
    console.log(convertData(chart , type)) ; 
  return (
    <div className={styles.container} >
        <span onClick={() => setChart(null)} className={styles.cross} >X</span>
        <div className={styles.chart} >

        </div>
    </div>
  )
}

export default Chart
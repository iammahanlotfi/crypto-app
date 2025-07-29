import { useEffect, useState } from "react" ; 
import { getCoinList } from "../../services/cryptoApi.js";
import TableCoin from "../modules/TableCoin.jsx";

function HomePage() {
    const [coins , setCoins] = useState([]) ;

    useEffect(()=> { 
        const getData = async () => { 
            const response = await fetch(getCoinList()) ; 
            const json = await response.json() ; 
            setCoins(json) ; 
        }
        getData() ; 
    } , []) ; 

  return (

    <div>
        <TableCoin coins = {coins} />        
    </div>

  )
}

export default HomePage
import { useEffect, useState } from "react" ; 
import { getCoinList } from "../../services/cryptoApi.js";
import TableCoin from "../modules/TableCoin.jsx";

function HomePage() {
    const [coins , setCoins] = useState([]) ;
    const [isLoading , setIsLoading ] = useState(true) ; 

    useEffect(()=> { 
        const getData = async () => { 
            const response = await fetch(getCoinList()) ; 
            const json = await response.json() ; 
            setCoins(json) ; 
            setIsLoading(false) ;
        }
        getData() ; 
    } , []) ; 

  return (

    <div>
        <TableCoin coins = {coins} isLoading = {isLoading} />        
    </div>

  )
}

export default HomePage
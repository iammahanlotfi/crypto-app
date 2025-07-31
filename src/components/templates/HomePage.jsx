import { useEffect, useState } from "react" ; 
import { getCoinList } from "../../services/cryptoApi.js";
import TableCoin from "../modules/TableCoin.jsx";
import Pagination from "../modules/Pagination.jsx";

function HomePage() {
    const [coins , setCoins] = useState([]) ;
    const [isLoading , setIsLoading ] = useState(true) ;
    const [page , setPage] = useState(1) ; 

    useEffect(()=> {
       
        setIsLoading(true) ; 

        const getData = async () => { 
            const response = await fetch(getCoinList(page)) ; 
            const json = await response.json() ; 
            setCoins(json) ; 
            setIsLoading(false) ;
        }
        getData() ; 
    } , [page]) ; 

  return (

    <div>
        <Pagination page = {page} setPage = {setPage} />
        <TableCoin coins = {coins} isLoading = {isLoading} />        
    </div>

  )
}

export default HomePage
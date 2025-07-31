import { useEffect, useState } from "react" ; 
import { getCoinList } from "../../services/cryptoApi.js";
import TableCoin from "../modules/TableCoin.jsx";
import Pagination from "../modules/Pagination.jsx";
import Search from "../modules/Search.jsx";

function HomePage() {
    const [coins , setCoins] = useState([]) ;
    const [isLoading , setIsLoading ] = useState(true) ;
    const [page , setPage] = useState(1) ; 
    const [currency , setCurrency] = useState("usd") ; 

    useEffect(()=> {

        setIsLoading(true) ; 

        const getData = async () => { 
          try{
              const response = await fetch(getCoinList(page , currency)) ; 
              const json = await response.json() ; 
              setCoins(json) ; 
              setIsLoading(false) ;
          }

          catch(error) { 
            alert(error.message) ;
          }
        }
        getData() ; 
    } , [page , currency]) ; 

  return (

    <div>
        <Search currency = {currency} setCurrency = {setCurrency} />
        <TableCoin coins = {coins} isLoading = {isLoading} currency = {currency}/> 
        <Pagination page = {page} setPage = {setPage} />
    </div>

  )
}

export default HomePage
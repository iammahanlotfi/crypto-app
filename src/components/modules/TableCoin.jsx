import { RotatingLines } from "react-loader-spinner";
import chartUp from "../../assets/chart-up.svg" ;
import chartDown from "../../assets/chart-down.svg" ;
import { marketChart } from "../../services/cryptoApi.js";
import styles from "./TableCoin.module.css" ; 

function TableCoin({coins , isLoading , currency , setChart}) {
   
  return (
    <div className={styles.container} >
      {isLoading ? <RotatingLines strokeColor="#3874ff" strokeWidth="2" /> : (
      <table className= {styles.table} >
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Volume</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
             <TableRow coin = {coin} key={coin.id} currency = {currency} setChart = {setChart} /> 
          ))}
        </tbody>
      </table>
      )}
    </div>
  )
}

export default TableCoin

const TableRow = ({coin , currency , setChart}) => {

  const {id , name , image , symbol , total_volume , current_price , price_change_percentage_24h : price_change} = coin ; 

  const currencySymbols  = {
    usd: "$" , 
    eur : "€" , 
    jpy : "¥" 
  } ; 

  const currencySymbol = currencySymbols[currency] || ""; 

  const showHandler = async () => { 
    try { 
      const response = await fetch(marketChart(id)) ; 
      const json = await response.json() ; 
      setChart(json) ; 
    }
    catch(error) { 
      setChart(null) ; 
    }
  }

  return(
    <tr>
            <td>
              <div className= {styles.symbol} onClick={showHandler} > 
                <img src={image} alt={name} />
                <span>{symbol.toUpperCase()}</span>
              </div>
            </td>
            <td>{name}</td>
            <td>{currencySymbol}  {current_price.toLocaleString()}</td>
            <td className= {price_change > 0 ? styles.success : styles.error} >{typeof price_change === "number" ? `${price_change.toFixed(2)}  %` : "N/A"}</td>
            <td>{currencySymbol}  {total_volume.toLocaleString()}</td> 
            <td><img src={price_change > 0 ? chartUp : chartDown} alt={name} /></td>
      </tr>
  )
}
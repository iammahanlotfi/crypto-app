import styles from "./Layout.module.css" ; 
function Layout({children}) {
  return (
    <>
    <header className={styles.header} >
        <h1>Crypto App</h1>
        <p><span>MahanLotfi</span> | React.js</p>
    </header>
    {children}
    <footer className={styles.footer} >
        <p>Mahan Lotfi</p>
    </footer>
    </>
  )
}

export default Layout
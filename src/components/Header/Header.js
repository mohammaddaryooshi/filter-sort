import styles from './Header.module.css'
const Header = () => {
    return ( 
        <div className={`${styles.header} shadow-box`}>
            <h1 className='text-bold'>جست و جوی محصولات</h1>
        </div>
     );
}
 
export default Header;
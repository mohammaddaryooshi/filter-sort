import styles from './Topbar.module.css'
const TopBar = () => {
    return (
        <div className={`${styles.topbar} shadow-box`}>
            <ul className={styles.topbarul}>
                <li className={`text-regular ${styles.topbarli} `}>خانه / </li>
                <li className={`text-regular ${styles.topbarli} `}> محصولات دیجیتال/</li>
                <li className={`text-regular ${styles.textblue} ${styles.topbarli}`}>گوشی موبایل</li>
            </ul>
        </div>
    );
}
 
export default TopBar;
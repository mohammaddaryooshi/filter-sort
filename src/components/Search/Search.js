import { useState } from "react";
import { useProductsActions } from "../../providers/ProductProvider";
import styles from './Search.module.css';
const Search = ({color}) => {
    
    const[value,setValue] = useState("");
    const dispatch = useProductsActions();

    const searchHandler = (e)=>{
     dispatch({type:"search",event:e});
     setValue(e.target.value);
    }
    return ( 
        <div>
            <input
            className={styles.input}
             type="text"
             onChange={searchHandler}
             placeholder = "جست و جو کنید ... "
              />
        </div>
     );
}
 
export default Search;
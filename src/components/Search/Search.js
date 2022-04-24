import { useState } from "react";
import { useProductsActions } from "../../providers/ProductProvider";

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
             type="text"
             onChange={searchHandler}
              />
        </div>
     );
}
 
export default Search;
import React, { useContext,useReducer} from "react";
import { productsData } from "../db/products";
import _ from 'lodash';
const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();


const reducer = (state,action)=>{
  switch(action.type){
    case "filterColor":
      console.log(action.selectedOption);
      if(action.selectedOption.value === ''){
          return productsData;
      }else{
        
        const updatedProducts = productsData.filter((p)=>{
          return p.color.indexOf(action.selectedOption.value) >=0
        });
        return updatedProducts;
      }
    case "filterPrice":
      
    console.log(state);
      const products = [...state];
      if(action.selectedOption.value === "lowest"){
       
       return _.orderBy(products,["price"],["asc"]);
      
      }else{
       
       return  _.orderBy(products,["price"],["desc"]);
     
       
      }

      case "search":
       const value = action.event.target.value;
       if(value === ''){
         return productsData;
       }else{
         const filteredProducts = productsData.filter((p)=>{
            return p.title.toLowerCase().includes(value.toLowerCase())
         });
         return filteredProducts;
       }
      
    default :
    return state;
  }
}

const ProductProvider = ({children}) => {
   

  
   const [Products,dispatch] = useReducer(reducer, productsData);
    return (
        <ProductsContext.Provider value={Products}>
            <ProductsContextDispatcher.Provider value={dispatch}>
            {children}
            </ProductsContextDispatcher.Provider>
        </ProductsContext.Provider>
      );
}



export const useProducts = ()=>{
    return useContext(ProductsContext);
}

export const useProductsActions = ()=>{
  return useContext(ProductsContextDispatcher);
}
export default ProductProvider;
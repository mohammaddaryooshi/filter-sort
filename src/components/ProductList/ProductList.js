import styles from './ProductList.module.css';
import { Container} from 'react-bootstrap';
import Filter from '../Filter/Filter';
import FilteredProduct from '../FilteredProduct.js/FilteredProduct';
const ProductList = () => {
    return ( 
        <div className={`${styles.productlist} shadow-box`}>
            <Container fluid>
                <Filter /> 
                <FilteredProduct /> 
            </Container>
        </div>
     );
}
 
export default ProductList;

import { Row,Col } from 'react-bootstrap';
import Product from '../Product/Product';
import { useProducts } from '../../providers/ProductProvider';
const FilteredProduct = () => {
   const products = useProducts();
   
    return ( 
        <Row>
           {products.map((product)=>{
            
            return  <Col key={product.id} xs={12} sm={12} md={6} lg={3} xl={3}>
            <Product
            key={product.id}
            price={product.price}
            title={product.title}
            image={product.image}
             /> 
           </Col>  
           })}
        </Row>
     );
}
 
export default FilteredProduct;
import { Row,Col } from 'react-bootstrap';
import ProductList from '../ProductList/ProductList';
import styles from './MainContent.module.css';
const MainContent = () => {
    return ( 
       
           <Row className={styles.maincontainer}>
            <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                <ProductList /> 
            </Col>
           </Row>
        
     );
}
 
export default MainContent;
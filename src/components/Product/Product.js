import {Card,Button } from 'react-bootstrap';
import styles from './Product.module.css';
const Product = ({image,title,price,colorcode}) => {
    return ( 
        <Card className={styles.card}  style={{ width: '100%',marginBottom:'2.5rem' }}>
            <span style={{ backgroundColor:`${colorcode}` }} className={styles.colorbox}></span>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className={`text-regular`}>{title}</Card.Title>
                <Card.Text className={`${styles.productprice} text-regular`}>
               {price} تومان
                </Card.Text>
                
            </Card.Body>
        </Card>
    );
}
 
export default Product;
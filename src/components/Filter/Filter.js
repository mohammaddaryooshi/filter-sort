import { Row,Col } from 'react-bootstrap';
import styles from './Filter.module.css';
import Select from 'react-select';
import { useState } from 'react';
import {useProductsActions} from '../../providers/ProductProvider';
import Search from '../Search/Search';

const colorOptions = [
    { value: '', label: 'همه رنگها' },
    { value: 'red', label: 'قرمز' },
    { value: 'blue', label: 'آبی' },
    { value: 'black', label: 'مشکی' },
    { value: 'yellow', label: 'زرد' }
  ];

  const priceOptions = [
    { value: 'highest', label: 'نزولی' },
    { value: 'lowest', label: 'صعودی' },
  
  ];

const Filter = () => {

   const [color,setColor] = useState("");
   const [price,setPrice] = useState("");
   const dispatch = useProductsActions();
   
   const colorHandler = (selectedOption)=>{
    dispatch({type:'filterColor',selectedOption:selectedOption});
    dispatch({type:"filterPrice",selectedOption:price});
    setColor(selectedOption);
   }

   const priceHandler = (selectedOption)=>{

     dispatch({type:"filterPrice",selectedOption:selectedOption});
     
     setPrice(selectedOption);
   }
    return ( 
      
            <Row>
                <Col className={styles.filtercol} xs={12} sm={12} md={6} lg={6} xl={6}>
               
                <Search color={color} /> 
                </Col>
                <Col className={styles.filtercol} xs={12} sm={12} md={6} lg={6} xl={6}>
                <Select
                    defaultValue={color}
                    onChange={colorHandler}
                    options={colorOptions}
                    className='text-regular'
                    placeholder='انتخاب کنید'
                />
                <Select
                    defaultValue={price}
                    onChange={priceHandler}
                    options={priceOptions}
                    className='text-regular'
                    placeholder='انتخاب کنید'
                />
                </Col>
            </Row>
 
     );
}
 
export default Filter;
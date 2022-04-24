
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import Header from './components/Header/Header';
import TopBar from './components/TopBar/TopBar';
import MainContent from './components/MainContent/MainContent';
import ProductProvider from './providers/ProductProvider';

function App() {
  return (
    <div className="App">
    
          <ProductProvider>
            <Container>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="headercol">
                  <Header /> 
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className='topbarcol'>
                  <TopBar /> 
                  </Col>
                </Row>
                
                  <MainContent /> 
                
              </Container>
        </ProductProvider> 
     
    </div>
  );
}

export default App;

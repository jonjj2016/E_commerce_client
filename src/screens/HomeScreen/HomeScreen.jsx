import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../../Components/Product';


const HomeScreen = ({products}) => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
            {
              products.map((item) => (
                <Col key={ item._id} sm={12} md={6} lg={4} xl={3}>
                  <Product   {...item}/>
                </Col>
              ))
            }
         </Row>
    </>
  )
};

export default HomeScreen

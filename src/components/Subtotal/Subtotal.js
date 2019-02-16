import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';


const mapStateToProps = state=>({price: state.total});

const Subtotal= props => {
    return (
      <Row className='show-grid'>
        <Col md={6}>Subtotal</Col>
        <Col md={6}>{`$${props.price}`}</Col>
      </Row>
    )
}

export default connect(mapStateToProps)(Subtotal);

import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

const EstimatedTotal = props => {
    return (
      <Row className='show-grid'>
        <Col md={6}>
            <h3>Est. Total</h3>
        </Col>
        <Col md={6}>
            <h3>{`$${props.estimatedTotal.toFixed(2)}`}</h3>
        </Col>
      </Row>
    )
}

const mapStateToProps = state => {
  let total = ( state.total + state.pickupSavings ) * (1 + state.taxRate);
  if(state.promoCode === 'DISCOUNT') {
    total *= 0.9
  }
  return {estimatedTotal: total};
}

export default connect(mapStateToProps)(EstimatedTotal);

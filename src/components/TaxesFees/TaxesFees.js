import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

const TaxesFees = props => {
    return (
      <Row className='show-grid'>
        <Col md={6}>Est. taxes and fees (Based on 94085)</Col>
        <Col md={6}>
        {`$${props.taxes.toFixed(2)}`}
        </Col>
      </Row>
    )
}

const mapStateToProps= state=>{
  return {
    taxes: (state.total + state.pickupSavings) * state.taxRate
  }
};

export default connect(mapStateToProps)(TaxesFees);

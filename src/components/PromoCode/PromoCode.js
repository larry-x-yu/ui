import React, { Component } from 'react';
import {
    Button,
    Collapse,
    Jumbotron,
    Form,
    Row,
    Col
} from 'react-bootstrap';

import {connect} from 'react-redux';
import { applyPromoCode } from '../../actions/promoCodeActions';

class PromoCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false,
            disabled: false,
            promoCode: ''
        }
    }

    handleBlur = e=>{
        this.setState({promoCode: e.target.value});
    }

    applyDiscount = () => {
        this.props.applyPromoCode(this.state.promoCode);
        this.setState({disabled: true});
    }

  render() {
    return (
        <div>
            <Button
                className='callapse-button'
                variant='link'
                onClick={()=>this.setState({open: !this.state.open})}
                >
                {this.state.open===false ? `Apply ` : `Hide `}promo code
                {this.state.open===false ? `+` : `-`}
                </Button>

                <Collapse in={this.state.open}>
                    <div>
                        <Jumbotron className='jumbotron-padding'>
                            <Row>
                                <Col md={12}>
                                    <Form>
                                        <Form.Group controlId='formInlineName'>
                                            <Form.Label>Promo Code</Form.Label>
                                            <Form.Control
                                                type='text'
                                                placeholder='Enter promo code'
                                                onBlur={this.handleBlur}
                                            >
                                            </Form.Control>
                                        </Form.Group>
                                        <Button
                                            block
                                            variant='primary'
                                            className='btn-round'
                                            disabled={this.state.disabled}
                                            onClick={this.applyDiscount}
                                        >
                                        Apply
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </div>
                </Collapse>
        </div>
    )
  }
}

export default connect( null, {applyPromoCode})(PromoCode);
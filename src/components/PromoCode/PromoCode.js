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
import {handleChange} from '../../actions/promoCodeActions';

class PromoCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false
        }
    }

    handleChange = e=>{
        this.props.handleChange(e);
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
                                                onChange={this.handleChange}
                                            >
                                            </Form.Control>
                                        </Form.Group>
                                        <Button
                                            block
                                            variant='primary'
                                            className='btn-round'
                                            disabled={this.props.isDisabled}
                                            onClick={this.props.giveDiscount}
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

const mapStateToProps = state => {};
export default connect( null, {handleChange})(PromoCode);
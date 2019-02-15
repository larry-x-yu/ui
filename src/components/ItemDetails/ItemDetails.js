import React, { Component } from 'react';
import {Button, Collapse, Jumbotron, Media, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

const mapStateToProps = state=>(
    {...state}
);

class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

  render() {
      let totalPrice = (this.props.total + this.props.pickupSavings) * (1 + this.props.taxRate);
      if(this.props.promoCode==='DISCOUNT') {
          totalPrice *= 0.9;
      }

    return (
        <div>
            <Button
                className='callapse-button'
                variant='link'
                onClick={()=>this.setState({open: !this.state.open})}
            >
            { this.state.open===false ? `See ` : `Hide `} item details
            { this.state.open===false ? `+` : `-`}
            </Button>
            <Collapse in={this.state.open}>
                <div>
                <Jumbotron className='jumbotron-padding'>
                        <Media>
                                <img
                                    width={100}
                                    height={100}
                                    src='https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff'
                                    alt='CFM OSS3085 Chair'
                                    />
                                <Media.Body>
                                    <p className='media-body-text'>Essentials by OFM ESS=3085 Racing Style Leather Gaming Chair, Red</p>
                                    <Row>
                                    <Col md={6}>
                                    <strong>{`$${this.props.price}`}</strong>
                                    <br/>
                                    <strong className='price-strike'>{`$${totalPrice.toFixed(2)}`}</strong>
                                    </Col>
                                    <Col md={6}>
                                        Qty.: 1
                                    </Col>
                                    </Row>
                                </Media.Body>
                        </Media>
                </Jumbotron>
                </div>
            </Collapse>
        </div>
    )
  }
}

export default connect(mapStateToProps, null)(ItemDetails);

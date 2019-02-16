import React, {
  Component
} from 'react';
import './App.css';
import {
  Container
} from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal.js';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCode from './components/PromoCode/PromoCode';
import {connect} from 'react-redux';
import {handleChange} from './actions/promoCodeActions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0
    };
  }

  componentDidMount = () => {
  }

  render() {
    return (
    <div className = 'container' >
      <Container className = 'purchase-card' >
      <Subtotal />

      <PickupSavings />
      <TaxesFees />
      <hr/>
      <EstimatedTotal />
      <ItemDetails />
      <hr/>
      <PromoCode />
      </Container>
      </div>
    );
  }
}

const mapStateToProps = state=> ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {})(App);
// export default App;
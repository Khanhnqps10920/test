import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import QuickCategories from '../../components/QuickCategories/QuickCategories'
import NewArrival from '../../components/NewArrival/NewArrival'
import DealOfTheWeek from '../../components/DealOfTheWeek/DealOfTheWeek'
import ShippingInformation from '../../components/ShippingInformation/ShippingInfomartion'


class HomePage extends PureComponent {
  render() {
    return (
      <div>
        <HeroBanner />
        <QuickCategories />
        <NewArrival />
        <DealOfTheWeek />
        <ShippingInformation />
      </div>
    );
  }
}

HomePage.propTypes = {

};

export default HomePage;
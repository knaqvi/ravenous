import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div class="BusinessList">
      <Business {business.name}/>
      <Business {business.address}/>
      <Business {business.city}/>
      <Business {business.state}, {business.zipCode}/>
      <Business {business.rating}/>
      <Business {business.reviewCount}/>
      </div>
    );
  }
}
export default BusinessList;

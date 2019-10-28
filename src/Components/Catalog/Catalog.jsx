import React from 'react';
import PropTypes from 'prop-types';
import { Product } from '../Product/index';
import './Catalog.css';

const Catalog = ({ products }) => (
  <div>
    <ul className="list">
      {products.map((item) => <li className="item" key={item.id}><Product item={item} /></li>)}
    </ul>
  </div>
);

Catalog.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    label: PropTypes.string,
    price: PropTypes.number,
  })),
}.isRequaired;

export default Catalog;

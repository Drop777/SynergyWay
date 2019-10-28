import { connect } from 'react-redux';
import Catalog from './Catalog';

const mapStateToProps = (state) => ({
  products: state.products,
});

const connectedCatalog = connect(mapStateToProps, null)(Catalog);

export {
  connectedCatalog as Catalog,
};

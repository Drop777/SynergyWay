import { connect } from 'react-redux';
import App from './App';
import { loadData } from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadData()),
});

const mapStateToProps = (state) => ({
  basket: state.basket,
});
const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export {
  connectedApp as App,
};

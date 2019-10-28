import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Route, Link, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';
import { Catalog } from '../Catalog/index';
import { Basket } from '../Basket/index';

class App extends React.Component {
  componentDidMount() {
    const { loadData } = this.props;
    loadData();
  }

  totalAmount = () => {
    const { basket } = this.props;
    let amount = 0;
    if (basket !== undefined) {
      [...basket].forEach((item) => {
        amount += item.amount;
      });
      return amount;
    }
    return amount;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppBar position="static">
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" noWrap>
                My store
              </Typography>
              <div>
                <Link to="/" className="link">
                  <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge color="secondary">
                      <StoreIcon />
                    </Badge>
                  </IconButton>
                </Link>
                <Link to="/basket" className="link">
                  <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={this.totalAmount()} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Link>
              </div>
            </Toolbar>
          </AppBar>
        </header>
        <main>
          <Switch>
            <Route path="/basket" component={Basket} />
            <Route path="/" component={Catalog} />
          </Switch>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  loadData: PropTypes.func,
  basket: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    label: PropTypes.string,
    price: PropTypes.number,
  })),
}.isRequaired;
export default App;

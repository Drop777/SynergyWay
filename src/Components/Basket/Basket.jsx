import React from 'react';
import './Basket.css';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Basket = ({ basket, deleteItem }) => {
  const totalPrice = () => {
    let price = 0;
    [...basket].forEach((item) => {
      price += (item.amount * item.price);
    });
    return price;
  };

  return (
    <div>
      <Paper>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Label</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.map((item) => (
              <TableRow key={item.id + Math.random()}>
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.label}</TableCell>
                <TableCell align="left">{item.amount}</TableCell>
                <TableCell align="left">{item.price}</TableCell>
                <TableCell><Button variant="contained" color="primary" onClick={() => deleteItem(item.id)}>Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <p className="price_label">
        Total price:
        {totalPrice()}
        $
      </p>
    </div>
  );
};

Basket.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    label: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number,
  })),
  deleteItem: PropTypes.func,
}.isRequaired;

export default Basket;

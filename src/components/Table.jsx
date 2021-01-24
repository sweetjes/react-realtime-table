import React from "react";
import './Table.css'
import { useDispatch } from 'react-redux'
import editPrice from '../actions/editPrice'
import editQuantity from '../actions/editQuantity'
import PropTypes from 'prop-types'
import TotalPrice from './TotalPrice'

export default function Table({ rows }) {
  const dispatch = useDispatch();

  return (
    <div className='table' >

      <div className='table-head'>
      {rows.map((row) => (
      <div className='cell-head'>{row.header}</div>
      ))}
      </div>

      <div className='table-body'>
        <div className='cell-body'>
          {rows.map((row) => (
            <div className='cell'>{row.name}</div>
          ))}
        </div>

        <div className='cell-body'>
          {rows.map((row) => (
            <div className='cell'
              onClick={() =>
                dispatch(editQuantity(row.id, prompt('Введите количество')))
              } >{row.quantity}</div>
          ))}
        </div>

        <div className='cell-body'>
          {rows.map((row) => (
            <div className='cell'
              onClick={() =>
                dispatch(editPrice(row.id, prompt('Введите цену за штуку')))
              } >{row.priceForOne}</div>
          ))}
        </div>

        <div className='cell-body'>
          {rows.map((row) => (
            <div className='cell' >{row.priceForOne * row.quantity}</div>
          ))}
        </div>
      </div>

      <TotalPrice />

    </div >

  );
}

Table.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
}


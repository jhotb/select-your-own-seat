import React from 'react'
import RailsTag from '@jho406/breezy/dist/RailsTag'

export default class extends React.Component {
  render () {
    const cartItems = this.props.cart.map(({rowNumber, price, removeButton, id}) => (
      <tr key={id}>
        <td> {rowNumber} </td>
        <td className="syos-table__cell--numerals"> {price} </td>
        <td className="syos-u-text-align-right">
          <button className="syos-button syos-button--transparent">
            <RailsTag html={ removeButton } />
          </button>
        </td>
      </tr>
    ))

    return (
      <div id="cart-summary">
        <h2 className="syos-u-margin-bottom-2">
          Your seat selections
        </h2>

        <p className="syos-u-font-size-small syos-u-margin-bottom-2">
          Seats are not reserved until added to the cart.
        </p>

        <table className="syos-table">
          <thead>
            <tr>
              <th>
                Seat
              </th>

              <th className="syos-table__cell--numerals">
               Price
              </th>

              <th className="visually-hidden">
                Remove
              </th>
            </tr>
          </thead>

          <tbody>
            { cartItems }
          </tbody>
        </table>
      </div>
    )
  }
}


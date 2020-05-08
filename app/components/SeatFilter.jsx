import React from 'react'
import RailsTag from '@jho406/breezy/dist/RailsTag'

export default class extends React.Component {
  render () {
    const {
      filters,
    } = this.props


    const controlElements = filters.map(({maximum, isChecked, uncheckedSvg, checkedSvg, price}) => {
      return (
        <>
          <input
            id={`filter-${maximum}`}
            className="syos-tile-controls__input"
            type="radio"
            name="maximum"
            value={maximum}
            checked={isChecked}
            readOnly
          />
          <label className="syos-tile-controls__control" htmlFor="filter-{maximum}">
            <RailsTag html={ uncheckedSvg } />
            <RailsTag html={ checkedSvg} />
            { price }
          </label>
        </>
      )
    })


    return (
      <form>
        <fieldset className="syos-u-margin-bottom-6">
          <legend className="syos-u-margin-bottom-2 syos-inline-stack">
            <h2 className="syos-inline-stack__item">
              Filter by max price
            </h2>

            <input className="syos-button syos-button--transparent" type="reset" value="Clear Filters" />
          </legend>

          <div className="syos-tile-controls">
            {controlElements}
          </div>

          <input type="submit" className="syos-button syos-u-margin-top-2" value="Apply Filters" />
        </fieldset>
      </form>
    )
  }
}

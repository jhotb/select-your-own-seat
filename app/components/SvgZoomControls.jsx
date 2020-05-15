import React from 'react'
import RailsTag from '@jho406/breezy/dist/RailsTag'

export default class extends React.Component {
  render() {
    const {
      zoomOutButton,
      zoomInButton,
    } = this.props

    return (
      <div className="syos-frame__map-zoom syos-control-zoom">
        <button
          className="syos-button syos-button--transparent syos-control-zoom__button"
          type="button"
        >
          <RailsTag html={zoomOutButton} />
        </button>

        <button
          className="syos-button syos-button--transparent syos-control-zoom__button"
          type="button"
        >
          <RailsTag html={zoomInButton} />
        </button>
      </div>
    )
  }
}

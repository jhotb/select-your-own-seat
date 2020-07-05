import React from 'react'
import RailsTag from '@jho406/breezy/dist/RailsTag'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hidden: true}
  }

  componentDidMount() {
    this.setState({hidden: false})
  }

  render() {
    const {
      zoomOutButton,
      zoomInButton,
      onZoomOut,
      onZoomIn,
    } = this.props

    const hidden = this.state.hidden

    return (
      <div className="syos-frame__map-zoom syos-control-zoom" hidden={this.state.hidden}>
        <button
          className="syos-button syos-button--transparent syos-control-zoom__button"
          type="button"
        >
          <RailsTag html={zoomOutButton} onClick={onZoomOut}/>
        </button>

        <button
          className="syos-button syos-button--transparent syos-control-zoom__button"
          type="button"
        >
          <RailsTag html={zoomInButton} onClick={onZoomIn}/>
        </button>
      </div>
    )
  }
}

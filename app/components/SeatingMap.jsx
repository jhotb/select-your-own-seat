import React from 'react'
import svgPanZoom from 'svg-pan-zoom'
import SvgZoomControls from 'components/SvgZoomControls'
import RailsTag from '@jho406/breezy/dist/RailsTag'

const filterSectionsByMax = (sections, maximum) => {
  return sections.map((section) => {
    const {opacity, hidden} = section
    let nextOpacity, nextHidden;

    if((maximum || Infinity)>= section.price) {
      nextOpacity = '1.0'
      nextHidden = false
    } else {
      nextOpacity = '0.3'
      nextHidden = true
    }

    if (opacity === nextOpacity && hidden === nextHidden) {
      return section
    } else  {
      return {...section, hidden: nextHidden, opacity: nextOpacity}
    }
  })
}

const buildSectionElements = (pageKey, sections) => {
  return sections.map((section) => {
    const seatElements = section.seats.map((seat) => (
      <a
        href={seat.venueFloorSeatPath}
        aria-label={seat.ariaLabel}
        data-bz-visit={true}
        data-bz-placeholder={pageKey}
       >
        <use
          width="12px"
          height="12px"
          xlinkHref={seat.href}
          x={seat.x}
          y={seat.y}
        />
      </a>
    ))

    return (
      <g
        opacity={section.opacity}
        aria-hidden={section.hidden}
      >
        {seatElements}
      </g>
    )
  })
}

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.svgRef = React.createRef()
    this.zoomIn = this.zoomIn.bind(this)
    this.zoomOut = this.zoomOut.bind(this)
  }

  componentDidMount() {
    this.map = svgPanZoom(this.svgRef.current, {
      center: true,
      fit: true,
      zoomEnabled: false,
      zoomScaleSensitivity: 0.75,
      minZoom: 1.0,
      maxZoom: 8,
    })
  }

  zoomIn() {
    this.map.zoomIn()
  }

  zoomOut() {
    this.map.zoomOut()
  }

  componentWillUnmount() {
    this.map.destroy()
  }

  componentDidUpdate(prevProps) {
    if (this.props.floor !== prevProps.floor) {
      this.map.reset()
    }
  }

  render() {
    const {
      sections,
      zoomControls,
      loadingIcon,
      loading,
      maximum,
      onSeatClick,
      pageKey,
    } = this.props
    const sectionElements = buildSectionElements(pageKey, filterSectionsByMax(sections, maximum))
    const loadingClass = loading && 'is-loading'

    return(
      <>
        <div
          className={`syos-frame__map-overlay syos-loader-overlay ${loadingClass}`}
          aria-hidden="true"
        >
          <RailsTag html={loadingIcon} />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="syos-seat-map"
          width="1600px"
          height="1600px"
          viewBox="0 0 1600 1600"
          ref={this.svgRef}
        >
          <rect fill="none" x="0" y="0" width="1600" height="1600"></rect>
          <svg style={{display: "none"}}>
            <symbol
              id="seat-icon-unselected"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle fill="#37b24d" r="12" cx="12" cy="12"></circle>
              <circle fill="#ffffff" r="6" cx="12" cy="12"></circle>
            </symbol>

            <symbol
              id="seat-icon-selected"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle fill="#37b24d" r="12" cx="12" cy="12"></circle>
            </symbol>
          </svg>
          { sectionElements }
        </svg>
        <SvgZoomControls
          {...zoomControls}
          onZoomOut={this.zoomOut}
          onZoomIn={this.zoomIn}
        />
      </>
    )
  }
}

import React from 'react'
import {mapStateToProps, mapDispatchToProps} from '@jho406/breezy'
import {connect} from 'react-redux'
import BaseScreen from 'components/BaseScreen'
import SeatDialog from 'components/SeatDialog'
import Cart from 'components/Cart'
import SeatFilter from 'components/SeatFilter'
import SeatingMap from 'components/SeatingMap'
import SeatingLegend from 'components/SeatingLegend'
import FloorSwitcher from 'components/FloorSwitcher'
import Layout from 'components/Layout'
import * as applicationActionCreators from 'javascript/packs/action_creators'

class SeatsIndex extends BaseScreen {
  constructor(props) {
    super(props)
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter(event, maximum) {
    this.props.setMaximum(this.props.pageKey, maximum)
    event.stopPropagation()
  }

  render () {
    const {
      venueName,
      seatingMap,
      seat,
      cart,
      floors,
      filters,
      filterSections,
    } = this.props

    return (
      <Layout {...this.props}>
        <SeatDialog {...seat} />
        <header className="syos-site-frame__header syos-site-header">
          <p className="syos-site-header__subtext">
            {venueName}
          </p>
        </header>

        <main className="syos-site-frame__main">
          <section
            className="syos-frame"
          >
            <div className="syos-frame__map">
              <FloorSwitcher floors={floors} onFloorClick={this.visitWithLoading}/>
              <SeatingLegend />
              <SeatingMap {...seatingMap} />
            </div>
            <div className="syos-frame__sidebar">
              <SeatFilter {...filters} onFilter={this.handleFilter}/>
              <Cart cart={cart} />
            </div>
          </section>
        </main>
      </Layout>
    )
  }
}

export default connect(
  mapStateToProps,
  {...mapDispatchToProps, ...applicationActionCreators}
)(SeatsIndex)

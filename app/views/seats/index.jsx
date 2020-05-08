import React from 'react'
import {mapStateToProps, mapDispatchToProps} from '@jho406/breezy'
import {connect} from 'react-redux'
import BaseScreen from 'components/BaseScreen'
import SeatDialog from 'components/SeatDialog'
import Cart from 'components/Cart'
import SeatingMap from 'components/SeatingMap'
import SeatingLegend from 'components/SeatingLegend'
import Layout from 'components/Layout'
import * as applicationActionCreators from 'javascript/packs/action_creators'

class SeatsIndex extends BaseScreen {
  render () {
    const {
      venueName,
      sections,
      seat,
      cart
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
              <SeatingLegend />
              <SeatingMap sections={sections} />
            </div>
            <div className="syos-frame__sidebar">
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

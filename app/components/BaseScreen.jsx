import React from 'react'
import {enhanceVisitWithBrowserBehavior} from '@jho406/breezy'

export default class extends React.Component {
  constructor (props) {
    super(props)
    const visit = enhanceVisitWithBrowserBehavior(props.visit)
    this.enhancedVisit = visit.bind(this)
    this.remote = props.remote

    this.visitWithLoading = (event) => {
      event.preventDefault()
      const { pageKey } = this.props
      this.props.toggleMapLoading({pageKey})
      const href = event.currentTarget.getAttribute('href')
      this.enhancedVisit(href)
    }
  }
}


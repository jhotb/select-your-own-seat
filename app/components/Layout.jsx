import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div className="syos-site-frame">
        {this.props.children}
      </div>
    )
  }
}




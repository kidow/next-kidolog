import React, { Component } from 'react'
import { Preview } from 'components/molecules'

import { connect } from 'react-redux'

class PreviewContainer extends Component {
  render() {
    const { title, markdown } = this.props
    return <Preview title={title} markdown={markdown} />
  }
}

export default connect(
  state => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown')
  }),
  () => ({})
)(PreviewContainer)

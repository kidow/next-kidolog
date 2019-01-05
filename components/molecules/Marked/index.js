import React, { Component } from 'react'
import marked from 'marked'
import './index.scss'

let Prism
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  Prism = require('prismjs')
  require('prismjs/components/prism-bash.min.js')
  require('prismjs/components/prism-javascript.min.js')
  require('prismjs/components/prism-typescript.min.js')
  require('prismjs/components/prism-json.min.js')
  require('prismjs/components/prism-jsx.min.js')
  require('prismjs/components/prism-css.min.js')
  require('prismjs/components/prism-markdown.min.js')
  require('prismjs/components/prism-scss.min.js')
}

import 'prismjs/themes/prism-tomorrow.css'

class Marked extends Component {
  state = {
    html: ''
  }

  constructor(props) {
    super(props)
    const { markdown } = this.props
    this.state = {
      html: markdown
        ? marked(props.markdown, { breaks: true, sanitize: true })
        : ''
    }
  }

  componentDidMount() {
    Prism.highlightAll()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.markdown !== this.props.markdown) {
      this.renderMarkdown()
    }
    if (prevState.html !== this.state.html) {
      Prism.highlightAll()
    }
  }

  renderMarkdown = () => {
    const { markdown } = this.props
    if (!markdown) {
      this.setState({ html: '' })
      return
    }
    this.setState({
      html: marked(markdown, {
        breaks: true,
        sanitize: true
      })
    })
  }
  render() {
    const { html } = this.state
    return <div className="marked" dangerouslySetInnerHTML={{ __html: html }} />
  }
}

export default Marked

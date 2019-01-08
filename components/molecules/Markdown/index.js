import React, { Component } from 'react'
import './index.scss'
import { Input } from 'components/atoms'
import PropTypes from 'prop-types'

let CodeMirror
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  CodeMirror = require('codemirror')
  require('codemirror/mode/markdown/markdown')
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/jsx/jsx')
  require('codemirror/mode/css/css')
  require('codemirror/mode/shell/shell')
  require('codemirror/mode/sass/sass')
  require('codemirror/mode/nginx/nginx')
}

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

class Markdown extends Component {
  editor = null
  cursor = null
  codeMirror = null

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.markdown !== this.props.markdown) {
      const { codeMirror, cursor } = this
      if (!codeMirror) return
      codeMirror.setValue(this.props.markdown)
      if (!cursor) return
      codeMirror.setCursor(cursor)
    }
  }

  initialize = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true
    })
    this.codeMirror.on('change', this.onChangeMarkdown)
  }

  onChange = e => {
    const { onChangeInput } = this.props
    const { name, value } = e.target
    onChangeInput({ name, value })
  }

  onChangeMarkdown = doc => {
    const { onChangeInput } = this.props
    this.cursor = doc.getCursor()
    onChangeInput({
      name: 'markdown',
      value: doc.getValue()
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { codeMirror, cursor } = this
    if (!codeMirror) return
    codeMirror.setValue(this.props.markdown)
    if (!cursor) return
    codeMirror.setCursor(cursor)
  }

  componentDidMount() {
    this.initialize()
  }

  render() {
    const { onChange } = this
    const { tags } = this.props
    return (
      <div className="markdown__container">
        <div
          className="markdown__code-editor"
          ref={ref => (this.editor = ref)}
        />
        <div className="markdown__tags">
          <div className="markdown__description">태그</div>
          <Input
            value={tags}
            onChange={onChange}
            name="tags"
            placeholder="태그를 입력하세요 (쉼표로 구분)"
            theme="tag"
          />
        </div>
      </div>
    )
  }
}

Markdown.propTypes = {
  tags: PropTypes.string,
  onChangeInput: PropTypes.func,
  markdown: PropTypes.string
}

export default Markdown

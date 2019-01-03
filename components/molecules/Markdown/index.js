import React, { Component } from 'react'
import './index.scss'
import { Input } from 'components/atoms'

import CodeMirror from 'codemirror'

import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/css/css'
import 'codemirror/mode/shell/shell'
import 'codemirror/mode/sass/sass'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

class Markdown extends Component {
  editor = null
  cursor = null
  codeMirror = null

  componentDidMount() {
    this.initializeEditor()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.markdown !== this.props.markdown) {
      const { codeMirror, cursor } = this
      if (!codeMirror) return
      codeMirror.setValue(this.props.markdown)
      if (!cursor) return
      codeMirror.setCursor(cursor)
    }
  }

  initializeEditor = () => {
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

export default Markdown

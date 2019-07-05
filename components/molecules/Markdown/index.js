import { useEffect, useCallback, useRef } from 'react'
import './index.scss'
import { Input } from 'components/atoms'
import { useSelector, useDispatch } from 'react-redux'
import { changeInput } from 'store/editor'

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
  require('codemirror/mode/sql/sql')
}

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

const Markdown = _ => {
  let cursor = null
  let codeMirror = null
  const { markdown, tags } = useSelector(state => state.editor)
  const dispatch = useDispatch()
  const editorRef = useRef()

  useEffect(
    _ => {
      if (!codeMirror) return
      codeMirror.setValue(markdown)
      if (!cursor) return
      codeMirror.setCursor(cursor)
    },
    [markdown]
  )

  const initialize = () => {
    codeMirror = CodeMirror(editorRef.current, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true
    })
    codeMirror.on('change', onChangeMarkdown)
  }

  const onChangeInput = useCallback(({ name, value }) =>
    dispatch(changeInput({ name, value }))
  )

  const onChange = e => {
    const { name, value } = e.target
    onChangeInput({ name, value })
  }

  const onChangeMarkdown = doc => {
    cursor = doc.getCursor()
    onChangeInput({
      name: 'markdown',
      value: doc.getValue()
    })
  }

  useEffect(
    _ => {
      if (!codeMirror) return
      codeMirror.setValue(markdown)
      if (!cursor) return
      codeMirror.setCursor(cursor)
    },
    [true]
  )

  useEffect(_ => {
    initialize()
  }, [])

  return (
    <div className="markdown__container">
      <div className="markdown__code-editor" ref={editorRef} />
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

export default Markdown

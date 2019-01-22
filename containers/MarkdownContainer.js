import { Markdown } from 'components/molecules'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as editorActions from 'store/editor'

class MarkdownContainer extends React.Component {
  onChangeInput = ({ name, value }) => {
    const { EditorActions } = this.props
    EditorActions.changeInput({ name, value })
  }

  render() {
    const { tags, markdown } = this.props
    const { onChangeInput } = this
    return (
      <Markdown markdown={markdown} tags={tags} onChangeInput={onChangeInput} />
    )
  }
}

export default connect(
  ({ editor }) => ({
    markdown: editor.markdown,
    tags: editor.tags
  }),
  dispatch => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(MarkdownContainer)

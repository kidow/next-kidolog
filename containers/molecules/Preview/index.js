import { Preview } from 'components/molecules'

import { connect } from 'react-redux'

class PreviewContainer extends React.Component {
  render() {
    const { title, markdown } = this.props
    return <Preview title={title} markdown={markdown} />
  }
}

export default connect(
  ({ editor }) => ({
    title: editor.title,
    markdown: editor.markdown
  }),
  () => ({})
)(PreviewContainer)

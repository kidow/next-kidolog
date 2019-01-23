import { withRouter } from 'next/router'
import { EditorTemplateContainer } from 'containers/templates'

const Editor = ({ router }) => {
  const { id } = router.query
  return <EditorTemplateContainer id={id} />
}

export default withRouter(Editor)

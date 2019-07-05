import { withRouter } from 'next/router'
import { EditorTemplate } from 'components/templates'

const Editor = ({ router }) => {
  const { id } = router.query
  return <EditorTemplate id={id} />
}

export default withRouter(Editor)

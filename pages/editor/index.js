import { withRouter } from 'next/router'
import { EditorTemplate } from 'components/templates'
import axios from 'axios'

const Editor = ({ post }) => <EditorTemplate post={post} />

Editor.getInitialProps = async ({ query }) => {
  if (!query.id) return {}
  const { data } = await axios.get(`${process.env.BASE_URL}/posts/${query.id}`)
  return { post: data }
}

export default withRouter(Editor)

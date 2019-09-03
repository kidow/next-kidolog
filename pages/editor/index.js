import { withRouter } from 'next/router'
import { EditorTemplate } from 'components/templates'
import Head from 'next/head'
import axios from 'axios'

const Editor = ({ post }) => (
  <>
    <Head>
      <title>에디터 | Kidolog</title>
    </Head>
    <EditorTemplate post={post} />
  </>
)

Editor.getInitialProps = async ({ query }) => {
  if (!query.id) return {}
  const { data } = await axios.get(`${process.env.BASE_URL}/posts/${query.id}`)
  return { post: data }
}

export default withRouter(Editor)

import { PostTemplate } from 'components/templates'
import { Logo } from 'components/atoms'
import { withRouter } from 'next/router'

import axios from 'axios'
import { Content } from 'components/molecules'

const Post = ({ post }) => {
  return (
    <PostTemplate>
      <Logo theme="post" />
      <Content post={post} />
    </PostTemplate>
  )
}

Post.getInitialProps = async ({ query }) => {
  if (!query.id) return {}
  const { data } = await axios.get(`${process.env.BASE_URL}/posts/${query.id}`)
  return { post: data }
}

export default withRouter(Post)

import { PostTemplate } from 'components/templates'
import { Logo } from 'components/atoms'
import { ContentContainer } from 'containers'
import { withRouter } from 'next/router'

const Post = ({ router }) => (
  <PostTemplate>
    <Logo theme="post" />
    <ContentContainer id={router.query.id} />
  </PostTemplate>
)

export default withRouter(Post)

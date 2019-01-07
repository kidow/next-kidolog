import { PostTemplate } from 'components/templates'
import { Logo } from 'components/atoms'
import { ContentContainer } from 'containers'
import { withRouter } from 'next/router'

import axios from 'axios'

class Post extends React.Component {
  static async getInitialProps({ query }) {
    const response = await axios.get(`http://localhost:3000/posts/${query.id}`)
    return { post: response.data }
  }

  render() {
    const { router } = this.props
    return (
      <PostTemplate>
        <Logo theme="post" />
        <ContentContainer id={router.query.id} />
      </PostTemplate>
    )
  }
}

export default withRouter(Post)

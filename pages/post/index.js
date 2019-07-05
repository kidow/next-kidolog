import { PostTemplate } from 'components/templates'
import { Logo } from 'components/atoms'
import { withRouter } from 'next/router'

import axios from 'axios'
import { Content } from 'components/molecules'

class Post extends React.Component {
  static async getInitialProps({ query }) {
    const response = await axios.get(`http://localhost:3000/posts/${query.id}`)
    return { post: response.data }
  }

  render() {
    const { post } = this.props
    return (
      <PostTemplate>
        <Logo theme="post" />
        <Content post={post} />
      </PostTemplate>
    )
  }
}

export default withRouter(Post)

import { Content } from 'components/molecules'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from 'store/post'
import * as authActions from 'store/auth'

import Router from 'next/router'

class ContentContainer extends React.Component {
  checkLogged = () => {
    const { AuthActions } = this.props
    AuthActions.check()
  }

  onRemove = async () => {
    const { PostActions, post } = this.props
    try {
      await PostActions.removePost(post._id)
      Router.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount() {
    this.checkLogged()
  }

  render() {
    const { post, logged } = this.props
    const { title, markdown, createdAt, tags, _id } = post
    const { onRemove } = this
    return (
      <Content
        title={title}
        markdown={markdown}
        createdAt={createdAt}
        tags={tags}
        logged={logged}
        id={_id}
        onRemove={onRemove}
      />
    )
  }
}

export default connect(
  ({ auth }) => ({
    logged: auth.logged
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(ContentContainer)

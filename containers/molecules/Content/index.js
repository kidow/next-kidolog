import { Content } from 'components/molecules'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from 'store/post'
import * as adminActions from 'store/admin'

import Router from 'next/router'

class ContentContainer extends React.Component {
  checkLogged = () => {
    const { AdminActions } = this.props
    AdminActions.check()
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
  ({ admin }) => ({
    logged: admin.logged
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch),
    AdminActions: bindActionCreators(adminActions, dispatch)
  })
)(ContentContainer)

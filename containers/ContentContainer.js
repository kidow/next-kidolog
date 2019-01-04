import React, { Component } from 'react'
import { Content } from 'components/molecules'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from 'store/post'
import * as authActions from 'store/auth'

import Router from 'next/router'

class ContentContainer extends Component {
  initialize = async () => {
    const { PostActions, id } = this.props
    try {
      await PostActions.getPost(id)
    } catch (e) {
      console.log(e)
    }
  }

  checkLogged = () => {
    const { AuthActions } = this.props
    AuthActions.check()
  }

  onRemove = async () => {
    const { PostActions, id } = this.props
    try {
      await PostActions.removePost(id)
      Router.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  async componentDidMount() {
    await this.checkLogged()
    this.initialize()
  }

  render() {
    const { loading, post, logged } = this.props
    const { title, markdown, createdAt, tags, _id } = post.toJS()
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
        loading={loading}
      />
    )
  }
}

export default connect(
  state => ({
    post: state.post.get('post'),
    logged: state.auth.get('logged'),
    loading: state.pender.pending['post/GET_POST']
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(ContentContainer)

import React, { Component } from 'react'
import { Content } from 'components/molecules'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from 'store/post'
import { Spinner } from 'components/atoms'

class ContentContainer extends Component {
  componentDidMount() {
    this.initialize()
  }

  initialize = async () => {
    const { PostActions, id } = this.props
    try {
      await PostActions.getPost(id)
    } catch (e) {
      console.log(e)
    }
  }

  onUpdate = () => {
    const { history, id } = this.props
    history.push(`/editor?id=${id}`)
  }

  onRemove = async () => {
    const { PostActions, id, history } = this.props
    try {
      await PostActions.removePost(id)
      history.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { loading, post, logged } = this.props
    const { title, markdown, createdAt, tags } = post.toJS()
    const { onUpdate, onRemove } = this
    if (loading) return <Spinner />
    return (
      <Content
        title={title}
        markdown={markdown}
        createdAt={createdAt}
        tags={tags}
        logged={logged}
        onUpdate={onUpdate}
        onRemove={onRemove}
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
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(ContentContainer)

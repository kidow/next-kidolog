import './index.scss'
import Input from '../Input'
import PropTypes from 'prop-types'
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeSearch, getList, nextList } from 'store/list'

const Search = _ => {
  const { search } = useSelector(state => state.list)
  const dispatch = useDispatch()

  const onChangeSearch = useCallback(e =>
    dispatch(changeSearch(e.target.value))
  )

  const onSearch = useCallback(async () => {
    try {
      if (search) {
        if (search[0] === '#') {
          await dispatch(getList({ tag: search.slice(1) }))
          const { next } = this.props
          if (next) dispatch(nextList(next))
          return
        }
        await dispatch(getList({ search }))
        const { next } = this.props
        if (next) dispatch(nextList(next))
      }
    } catch (e) {
      console.log(e)
    }
  })

  const onKeyPress = useCallback(e => e.key === 'Enter' && onSearch())

  return (
    <div className="search__container">
      <Input
        theme="search"
        placeholder="태그 검색은 # 붙이기"
        value={search}
        onChange={onChangeSearch}
        onKeyPress={onKeyPress}
      />
    </div>
  )
}

Search.propTypes = {
  search: PropTypes.string,
  onChangeSearch: PropTypes.func,
  onKeyPress: PropTypes.func
}

export default Search

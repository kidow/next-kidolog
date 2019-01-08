import './index.scss'
import Input from '../Input'
import PropTypes from 'prop-types'

const Search = ({ search, onChangeSearch, onKeyPress }) => {
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

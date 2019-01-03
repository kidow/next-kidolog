import './index.scss'
import Input from '../Input'

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

export default Search

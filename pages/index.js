import { PageTemplate, ListTemplate } from 'components/templates'
import { List } from 'components/organisms'
import { Search } from 'components/atoms'

export default () => (
  <PageTemplate>
    <ListTemplate>
      <Search />
      <List />
    </ListTemplate>
  </PageTemplate>
)

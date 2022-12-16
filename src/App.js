import Layout from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repo-list';
import Search from './components/search';

const repoList = [
  {
    name: 'Mi primer proyecto con React',
    id: '1234',
  },
  {
    name: 'Mi segundo proyecto con React',
    id: '1245',
  },
]

function App() {
  return (
    <Layout>
      {/* Profile */}
      <Profile />
      {/* Filers */}
      <Filters />
      {/* Repo List */}
      <RepoList repoList={repoList} />
      {/* Search */}
      <Search />
    </Layout>
  )
}

export default App;

import Layout from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repo-list';
import Search from './components/search';
import repoData from './repo-data';


function App() {
  return (
    <Layout>
      {/* Profile */}
      <Profile />
      {/* Filers */}
      <Filters />
      {/* Repo List */}
      <RepoList repoList={repoData} />
      {/* Search */}
      <Search />
    </Layout>
  )
}

export default App;

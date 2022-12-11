import Layout from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repo-list';
import Search from './components/search';
import './App.css';

function App() {
  return (
    <Layout>
      {/* Profile */}
      <Profile />
      {/* Filers */}
      <Filters />
      {/* Repo List */}
      <RepoList />
      {/* Search */}
      <Search />
    </Layout>
  )
}

export default App;

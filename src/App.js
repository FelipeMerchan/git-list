import { useEffect, useState } from 'react';

import Layout from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repo-list';
import Search from './components/search';
import { getRepos, getUser } from './services/users';


function App() {
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  useEffect(() => {
    getUser('felipemerchan').then(({ data, isError }) => {
      if (isError) {
        console.log('No hemos encontrado a este usuario')
        return
      }

      setUser(data)
    })
  }, [])

  useEffect(() => {
    getRepos('felipemerchan').then(({ data, isError }) => {
      if (isError) {
        console.log('No hemos encontrado los respositorios de este usuario')
        return
      }

      setRepos(data)
    })
  }, [])

  return (
    <Layout>
      {/* Profile */}
      <Profile {...user} />
      {/* Filers */}
      <Filters />
      {/* Repo List */}
      <RepoList repoList={repos} />
      {/* Search */}
      <Search />
    </Layout>
  )
}

export default App;

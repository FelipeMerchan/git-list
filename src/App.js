import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Layout from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repo-list';
import Modal from './components/modal'
import Search from './components/search';
import { getRepos, getUser } from './services/users';

function App() {
  const params = useParams()
  let username = params.user
  if (!username) {
    username = 'felipemerchan'
  }
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getUser(username).then(({ data, isError }) => {
      if (isError) {
        console.log('No hemos encontrado a este usuario')
        return
      }

      setUser(data)
    })

    getRepos(username).then(({ data, isError }) => {
      if (isError) {
        console.log('No hemos encontrado los respositorios de este usuario')
        return
      }

      setRepos(data)
    })
  }, [username])

  return (
    <Layout>
      <Modal isActive={modal} setModal={setModal} />
      {/* Profile */}
      <Profile {...user} />
      {/* Filers */}
      <Filters repoListCount={repos.length} setSearch={setSearch} />
      {/* Repo List */}
      <RepoList search={search} repoList={repos} />
      {/* Search */}
      <Search setModal={setModal} />
    </Layout>
  )
}

export default App;

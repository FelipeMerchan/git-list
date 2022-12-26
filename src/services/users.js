const BASE_API = 'https://api.github.com'

async function fetchWrapper(url, options) {
  const response = await fetch(url, options)
  if (!response.ok) {
    return {
      data: null,
      isError: true,
    }
  }
  const data = await response.json()

  return {
    data,
    isError: false,
  }
}

export async function getUser(userName) {
  return fetchWrapper(`${BASE_API}/users/${userName}`)
}

export async function getRepos(userName) {
  return fetchWrapper(`${BASE_API}/users/${userName}/repos`)
}

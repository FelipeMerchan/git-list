function removeDuplicates(list) {
  return list.filter((item, index) => {
    if (item) return list.indexOf(item) === index
    return false
  })
}

export function getAllLanguajes(reposList) {
  const languageList = reposList.map(repo => repo.language)
  return removeDuplicates(languageList)
}
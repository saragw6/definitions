const getTermFromPath = (path) => {
  var term = ''
  if (path.startsWith('search')) {
    term = decodeURIComponent(path.substring(7))
  }
  return term
}

const searchHashRedirect = () => {
  var term = window.location.hash.substring(2)
  console.log(term)
  if (term && window.location.pathname === '/') {
    console.log('redirecting')
    window.location.replace('/search/' + term)
  }
}

export { getTermFromPath, searchHashRedirect }

export const HandleLinkResolver = (doc) => {
  if (doc.type === 'project') {
    return `/project/${doc.uid}`
  }

  if (doc.type === 'information') {
    return '/information'
  }

  if (doc.type === 'projects') {
    return `/prjoects`
  }

  if (doc.type === 'journal') {
    return `/journal`
  }

  // Default to homepage
  return '/'
}

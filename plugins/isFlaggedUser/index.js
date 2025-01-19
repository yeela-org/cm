module.exports = username => {
  const flaggedUsers = ['user1', 'user2']
  if (flaggedUsers.includes(username)) {
    return true
  } else {
    return false
  }
}

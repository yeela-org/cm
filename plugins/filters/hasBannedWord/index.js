const _ = require('lodash');
const bannedWords = ['wip', 'draft', 'do not merge'];

function hasBannedWord(title) {
  console.log('called hasBannedWord, lodash version:', _.VERSION)
  return _.some(bannedWords, word => _.toLower(title).includes(word))
}

module.exports = hasBannedWord;

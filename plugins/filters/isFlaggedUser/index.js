const flaggedUsers = ["user1", "user2"];

function isFlaggedUser(username) {
    console.log('called isFlaggedUser');
    if (flaggedUsers.includes(username)) {
        return true;
    } else {
        return false;
    }
};

module.exports = isFlaggedUser;

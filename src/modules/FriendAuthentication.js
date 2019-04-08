// // This module goes through the process of verifying a friend when a user
// // clicks on their name in messages, or adds them by name in the FriendList


// const AuthenticateFriend = (user, friendName, currentUsername, friendsWithStuff) => {
//     let friendIsNotSelf = ""
//     let friendIsInDatabase = ""
//     let friendIsNotFriend = ""
//     let otherFriendId = ""
//     let errorStatement = ""
//     let friendObject=""
//         if (user.length) {
//             friendIsInDatabase = true;
//             otherFriendId = user[0].id

//             console.log("friend is in database", friendIsInDatabase, user[0].id)
//             // check to make sure they are not trying to add themself
//             if (friendName !== currentUsername) {
//                 friendIsNotSelf = true;

//                 console.log("friend is not self", friendIsNotSelf)
//             }
//             else {
//                 errorStatement = "You cannot add yourself"

//             }
//             const findFriend = friendsWithStuff.find((friend =>
//                 friend.username === friendName))

//             if (!findFriend) {
//                 friendIsNotFriend = true;

//                 console.log("friend is not already friend", friendIsNotFriend)

//             }
//             else {
//                 errorStatement = `${friendName} is already a friend`

//             }
//             if (friendIsNotSelf === true && friendIsNotFriend === true) {



//             }
//         }

//         const thingToReturn=(errorStatement===""?friendObject:errorStatement)


//     return thingToReturn
// }

// export default AuthenticateFriend
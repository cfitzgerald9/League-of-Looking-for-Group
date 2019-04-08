export default {
    getAllFriends() {
      return fetch(`http://localhost:5002/friends`)
      .then(e => e.json())
    },
    addFriend(newFriend) {
      return fetch(`http://localhost:5002/friends`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newFriend)
      }).then(data => data.json())
      .then(console.log(newFriend))
    },
    getFriendName (searchName)  {
      return fetch(`http://localhost:5002/users?username=${searchName}`)
      .then(n => n.json())
  },
    deleteFriend(id){
        return fetch(`http://localhost:5002/friends/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      }).then(data => data.json())
    }
}
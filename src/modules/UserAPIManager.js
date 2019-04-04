export default {
    getAllUsers() {
      return fetch(`http://localhost:5002/users`)
      .then(e => e.json())
    },
    postUser(newUser) {
      return fetch(`http://localhost:5002/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      }).then(data => data.json())
    },
    getByEmail: email =>
    fetch(`http://localhost:5002/users?email=${email}`)
    .then(e => e.json()),
    getOneUser: id =>
    fetch(`http://localhost:5002/users/${id}`)
    .then(user => user.json()),

  putUser(editedUser) {
    return fetch(`http://localhost:5002/users/${editedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedUser)
    }).then(data => data.json());
  },
  patchUser(id, fixedUser) {
    return fetch(`http://localhost:5002/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fixedUser)
    }).then(data => data.json());
  },
    getAllPurposes() {
      return fetch(`http://localhost:5002/purposes`)
      .then(e => e.json())
    },
  }
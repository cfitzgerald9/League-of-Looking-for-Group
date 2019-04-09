export default {
getAllMessages() {
    return fetch(`http://localhost:5002/messages`)
    .then(e => e.json())
  },
  getUserMessages(){
  return fetch('http://localhost:5002/messages?_expand=user')
  .then(r => r.json())
  }
}
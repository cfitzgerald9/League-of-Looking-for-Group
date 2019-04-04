export default {
getAllMessages() {
    return fetch(`http://localhost:5002/messages`)
    .then(e => e.json())
  }
}
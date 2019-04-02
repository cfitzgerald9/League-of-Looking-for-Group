export default{
    getByName(summonerName, apiKey) {
        return fetch(`http://localhost:6060/api/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`, {
        }).then(data => data.json())
        .then(parsedUser => {
            console.log(parsedUser)
        })
      }
    }
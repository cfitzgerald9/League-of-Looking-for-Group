export default{
    getByName(summonerName, apiKey) {
        return fetch(`http://localhost:6060/api/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`, {
        }).then(data => data.json())
      },
      getById(summonerId, apiKey) {
        return fetch(`http://localhost:6060/api/league/v4/positions/by-summoner/${summonerId}?api_key=${apiKey}`, {
        }).then(data => data.json())
      }
    }
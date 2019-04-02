export default{
    getByName(summonerName, apiKey) {
        return fetch(`http://localhost:6060/api/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`, {
        // method: "GET",
        // headers: {
        //         "Origin": "https://developer.riotgames.com",
        //         "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        //         "X-Riot-Token": "RGAPI-c648c75c-66a1-43fb-a1be-250bb9c7997d",
        //         "Accept-Language": "en-US,en;q=0.9",
        //         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
        //   },

        }).then(data => data.json())
        .then(parsedUser => {
            console.log(parsedUser)
        })
      }
    }
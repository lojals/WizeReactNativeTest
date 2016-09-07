var api = {
  getTeamsFromApiAsync() {
      return fetch('https://gist.githubusercontent.com/lojals/1855633ec75e288e54a5cf8dbd87eaa1/raw/acb4a94a1e5ac168884a2593e25a17d62ac1d061/test_wizeline.json')
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson.teams;
        })
        .catch((error) => {
          console.error(error);
        });
  }
}
module.exports = api;

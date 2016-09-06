var api = {
  getTeamsFromApiAsync() {
      return fetch('https://gist.githubusercontent.com/lojals/1855633ec75e288e54a5cf8dbd87eaa1/raw/0d5d0b7abab80229fd261f060020f71f002c05eb/test_wizeline.json')
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

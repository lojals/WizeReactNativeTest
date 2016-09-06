var api = {
  getDevelopersFromApiAsync() {
      return fetch('https://gist.githubusercontent.com/lojals/1855633ec75e288e54a5cf8dbd87eaa1/raw/b30466a7341c77dcc187fdafcb89f2302f951bed/test_wizeline.json')
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson.data;
        })
        .catch((error) => {
          console.error(error);
        });
  }
}
module.exports = api;

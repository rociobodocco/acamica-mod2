const apiKey = 'JQhP1sBxi7d1SKpBsMlFDJYPGUobpcpK';
const apiBaseUrl = 'https://api.giphy.com/v1/gifs/';
undefined
function getTrends() {
    const found = fetch(apiBaseUrl + 'trending?api_key=' + apiKey)
        .then((response) => {
           return response.json()
        }).then(data => {
            return data
        })
        .catch((error) => {
            return error
        })
    return found
}
undefined
getTrends().then(results => {
    console.log(results)
})

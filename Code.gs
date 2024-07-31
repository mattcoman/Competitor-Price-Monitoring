function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getPrices(product) {
  var apiKey = 'YOUR_COMPETITORPRICE_API_KEY';
  var url = 'https://api.competitorprice.com/prices?product=' + product + '&apiKey=' + apiKey;
  var response = UrlFetchApp.fetch(url);
  var json = JSON.parse(response.getContentText());
  return json.prices.map(function(price) {
    return '<p>Competitor: ' + price.competitor + ', Price: ' + price.amount + '</p>';
  }).join('');
}

const data_url = "https://api.coindesk.com/v1/bpi/currentprice.json";

async function getData(url) {
  const response = await fetch(url);

  return response.json(); // get JSON from the response 
}

const url = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today'

async function getAPI() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getAPI();
const btn = document.getElementById('btn');
const input = document.getElementById('searchcity');
const locationElement = document.getElementById('location');
const tempElement = document.getElementById('temp');
const cloudPctElement = document.getElementById('cloud_pct');
const minTempElement = document.getElementById('min_temp');
const maxTempElement = document.getElementById('max_temp');
const sunsetElement = document.getElementById('sunset');
const messege = document.getElementById('messege');

async function getWeather(){
  const inputValue = input.value; 
  const apiUrl = `https://api.api-ninjas.com/v1/weather?city=${inputValue}`;
  const apiKey = 'WQ1u+v/FdGZfNuCWj4QwTQ==vsxDjHYzkdUL2gwE';
  const options = {
    method: 'GET',
    headers: { 
      'X-Api-Key': apiKey,
    },
  };
  locationElement.innerHTML = inputValue;
  try {
    messege.style.display = 'none'
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    tempElement.innerHTML = `Temperature: ${data.temp} °C 🌡️`;
    cloudPctElement.innerHTML = `Cloud Percentage: ${data.cloud_pct} % ☁️`;
    minTempElement.innerHTML = `Min temperature: ${data.min_temp} °C 🔽`;
    maxTempElement.innerHTML = `Max temperature: ${data.max_temp} °C 🔼`;
    sunsetElement.innerHTML = `Sunset: ${data.sunset} 🌇`;
  } catch(error) {
    console.log(error);
  }
}

btn.addEventListener('click', getWeather);

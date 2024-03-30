let cities = ['Москва', 'Париж', 'Лондон', 'Нью-Йорк'];
let temperatures = [];

cities.forEach(city => {
    let temperature = parseFloat(prompt(`Введите температуру в городе ${city}:`));
    temperatures.push({ city, temperature });
});

const weatherList = document.getElementById('weatherList');
temperatures.forEach(data => {
    let listItem = document.createElement('li');
    listItem.textContent = `${data.city}: ${data.temperature}°C`;
    weatherList.appendChild(listItem);
});

let maxTemperature = -Infinity;
let minTemperature = Infinity;
temperatures.forEach(data => {
    maxTemperature = Math.max(maxTemperature, data.temperature);
    minTemperature = Math.min(minTemperature, data.temperature);
});

let weatherInfo = document.getElementById('weatherInfo');
weatherInfo.textContent = `Максимальная температура: ${maxTemperature}°C, Минимальная температура: ${minTemperature}°C`;
const apikey = '4d29db6eded5ce8c3e01b1e52e5e6cb4';
const lang = 'pt_br';
const units = 'metric';

const cardEl = document.querySelector('.card');
const iconEl = document.querySelector('.icon');
const nomeCidadeEl = document.querySelector('.card h1');
const tempEl = document.querySelector('.card h2');
const feelsLikeEl = document.querySelector('.card .feels-like span');
const tempMinEl = document.querySelector('.min');
const tempMaxEl = document.querySelector('.max');
const humidityEl = document.querySelector('.humidity span');
const windEl = document.querySelector('.wind span');
const windImgEl = document.querySelector('.wind img');
const inputEl = document.querySelector('.input input');
const button = document.querySelector('.input button');


async function callApi(){
    try {

        const city = inputEl.value || "São Paulo";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}&lang=${lang}`
        )
        const data = await response.json()
        
            const iconPosition = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconPosition}@4x.png`
            iconEl.src = iconUrl;
            nomeCidadeEl.innerHTML = data.name;
            tempEl.innerHTML = Math.round(data.main.temp) + " °";
            feelsLikeEl.innerHTML = Math.round(data.main.feels_like);
            tempMinEl.innerHTML= Math.round(data.main.temp_min);
            tempMaxEl.innerHTML = Math.round(data.main.temp_max);
            humidityEl.innerHTML = data.main.humidity.toLocaleString();
            windEl.innerHTML = data.wind.speed.toLocaleString();
            windImgEl.style.transform = `rotate(${data.wind.deg}deg)`;

            cardEl.classList.add('active');
        }catch(err){
            console.log(err);
            cardEl.classList.remove('active');
            alert('Ocorreu um erro');
        }
}
//chamando api
button.addEventListener('click', callApi)


inputEl.addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
        callApi();
    }
})
//DOM Elements

const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  btn_bg = document.querySelector('.btn_bg'),
  blockquote = document.querySelector('blockquote'),
  figcaption = document.querySelector('figcaption'),
  btn_Qu = document.querySelector('.btn_Quote');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const windSpeed = document.querySelector(".windSpeed");
const humidity = document.querySelector(".humidity");


//Show Time
function showTime() {
    let toDays = {
        0:'Воскресенье',
        1:'Понедельник',
        2:'Вторник',
        3:'Среда',
        4:'Четверг',
        5:'Пятница',
        6:'Суббота',
    };

    let toMonth = {
        0:'января',
        1:'февраля',
        2:'марта',
        3:'апреля',
        4:'мая',
        5:'июня',
        6:'июля',
        7:'августа',
        8:'сентября',
        9:'октября',
        10:'ноября',
        11:'декабря',
    };

    let today = new Date(),
        day = today.getDay(),
        date = today.getDate(),
        month = today.getMonth(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    time.innerHTML = `${toDays[day]}<span>,</span> ${date} ${toMonth[month]}<br>${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    
    setTimeout(showTime, 1000);    
}
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
function setGreet() {
    let today = new Date(),
    hour = today.getHours();  

    if (hour >= 6 && hour < 12){
        greeting.textContent = 'Доброе утро, ';
        bg = 'morning';      
    } else if (hour >= 12 && hour < 18){
        greeting.textContent = 'Добрый день, ';
        bg = 'day';       
    } else if (hour >= 18 && hour <= 23){
        greeting.textContent = 'Добрый вечер, ';
        bg = 'evening';        
    } else{
        greeting.textContent = 'Доброй ночи, ';
        bg = 'night';          
    }     
}
function getBg(){
    let toDay = ['day/01', 'day/02', 'day/03', 'day/04', 'day/05', 'day/06', 'day/07', 'day/08', 'day/09', 'day/10', 'day/11', 'day/12', 'day/13', 'day/14', 'day/15', 'day/16', 'day/17', 'day/18', 'day/19', 'day/20'];
    let toEven = ['evening/01', 'evening/02', 'evening/03', 'evening/04', 'evening/05', 'evening/06', 'evening/07', 'evening/08', 'evening/09', 'evening/10', 'evening/11', 'evening/12', 'evening/13', 'evening/14', 'evening/15', 'evening/16', 'evening/17', 'evening/18', 'evening/19', 'evening/20'];
    let toMorn = ['morning/01', 'morning/02', 'morning/03', 'morning/04', 'morning/05', 'morning/06', 'morning/07', 'morning/08', 'morning/09', 'morning/10', 'morning/11', 'morning/12', 'morning/13', 'morning/14', 'morning/15', 'morning/16', 'morning/17', 'morning/18', 'morning/19', 'morning/20'];
    let toNight = ['night/01', 'night/02', 'night/03', 'night/04', 'night/05', 'night/06', 'night/07', 'night/08', 'night/09', 'night/10', 'night/11', 'night/12', 'night/13', 'night/14', 'night/15', 'night/16', 'night/17', 'night/18', 'night/19', 'night/20'];

    let bgData = [];
    let index = Math.floor(Math.random() * 20);

    for (let i = 0; i < 24; i++) {
        if (i < 6) bgData[i] = `assets/images/${toNight[index]}.jpg`; 
        else if (i < 12) bgData[i] = `assets/images/${toMorn[index]}.jpg`;
        else if (i < 18) bgData[i] = `assets/images/${toDay[index]}.jpg`;
        else bgData[i] = `assets/images/${toEven[index]}.jpg`;
    }   
 
    let today = new Date(),
    hour = today.getHours();
    let src = bgData[hour];
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => {
    document.body.style.backgroundImage = `url(${src})`; 
    }   
    btn_bg.disabled = true;
    setTimeout(function() { btn_bg.disabled = false }, 1500);
} 
function getName() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
        name.textContent = '[Введите Имя]';        
    } else {
        name.textContent = localStorage.getItem('name');
    }
}
function setName(e) {
    if (e.type === 'keypress'){
        if (e.keyCode == 13 || e.which == 13){
            if (e.target.innerText === '') {
                name.blur();
                getName();
            } else {
                localStorage.setItem('name', e.target.innerText);
                name.blur();     
            }      
        }
    } else{
        getName();
    }
}
function getFocus() {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
        focus.textContent = '[Введите цель]';        
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}
function setFocus(e) {

    if (e.type === 'keypress'){
        if (e.keyCode == 13 || e.which == 13){

            if (e.target.innerText === ''){
                focus.blur();
                getFocus();
            }else {
                localStorage.setItem('focus', e.target.innerText);
                focus.blur();
            }
        }
    } else{
        getFocus();
    }  
}
async function getQuote() {  
    const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru`;
    const res = await fetch(url);
    const data = await res.json(); 
    blockquote.textContent = data.quoteText;
    figcaption.textContent = data.quoteAuthor;
  }

function getCity() {
    if (localStorage.getItem("city") === null) {
      city.textContent = "Введите Ваш город";
    } else {
      city.textContent = localStorage.getItem("city");
      getWeather();
    }
}

let cityStorage = "";

function hiddenCity(e) {
  localStorage.setItem("city", e.target.innerText);
  cityStorage = localStorage.getItem("city");
  if (e.type === "click") {
    city.textContent = "";
  }
}
function setCity(e) {
    if (e.code === "Enter") { 
        localStorage.setItem("city", e.target.innerText);     
      city.blur();
      getWeather();
    }
}

city.onblur = function () {
    getWeather();
};

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=ef96409f477221808991385c3d9719b3&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (city.textContent == "") {
      localStorage.setItem("city", cityStorage);
      city.textContent = localStorage.getItem("city");
    } else if (data.cod != 200) {
      alert("Такой город не найден");
      city.textContent = "[Введите Ваш город]";
      weatherIcon.className = "weather-icon owf";
      temperature.textContent = ``;
      weatherDescription.textContent = "";
      humidity.textContent = ``;
      windSpeed.textContent = ``;
    } else {
      weatherIcon.className = "weather-icon owf";
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.trunc(data.main.temp)}°C`;
      city.textContent = data.name;
      weatherDescription.textContent = data.weather[0].description;
      humidity.textContent = `Влажность: ${data.main.humidity}%`;
      windSpeed.textContent = `Скорость ветра: ${data.wind.speed}м/c`;
    }
}
  
  

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click', () => {name.textContent = "";});

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', () => {focus.textContent = "";});

city.addEventListener("click", hiddenCity);
city.addEventListener("keypress", setCity);
city.addEventListener("blur", setCity);

btn_bg.addEventListener('click', getBg);
document.addEventListener('DOMContentLoaded', getQuote);
btn_Qu.addEventListener('click', getQuote);


getCity();
showTime();
setGreet();
getName();
getFocus();
getBg();









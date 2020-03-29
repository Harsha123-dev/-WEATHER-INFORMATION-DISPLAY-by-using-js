var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var country = document.querySelector('.country');
var desc = document.querySelector('.desc');
var icon = document.querySelector('.icon');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
const weather = {};

function show(btn) {
        var shows = document.getElementById("shows");
            shows.style.display = "block";
    }
button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=90ca5ff2555653de22137071883c6ee3')
.then(response => response.json())
.then(data => {

  var tempValue =  Math.round(parseFloat( data['main']['temp'])-273.15);
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  // var iconValue = data['weather'][0]['icon'];
  // var.countryValue = data['sys']['country'];

  main.innerHTML = "City-"+nameValue;
  desc.innerHTML = "Description- "+descValue;
  temp.innerHTML = "Temperture - "+ tempValue +"&#8451";
   // country.innerHTML = "Country - "+ countryValue;
  // icon.innerHTML = `<img src="icons/${weather.iconValue}.png"/>`;

})

// .catch(err => alert("Wrong city name!"));
})
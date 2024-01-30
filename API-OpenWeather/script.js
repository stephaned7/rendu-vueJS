const changeCity = document.querySelector(".changeLocation");
changeCity.addEventListener("click", () => {
  let city = prompt("Entrez le nom de la ville");
  getTemp(city);
});

function getTemp(city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4f856dde696d2bd69a59cd767fb9142c&units=metric")
    .then((response) => response.json())
    .then((data) => {
      let temp = data.main.temp;
      let ville = data.name;
      document.querySelector(".temp").innerHTML = temp;
      document.querySelector(".city").innerHTML = ville;
    })
    .catch((err) => console.log(err));
};

defaultCity = "Paris";
getTemp(defaultCity);

navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=4f856dde696d2bd69a59cd767fb9142c&units=metric")
    .then((response) => response.json())
    .then((data) => {
      let temp = data.main.temp;
      let ville = data.name;
      document.querySelector(".temp").innerHTML = temp;
      document.querySelector(".city").innerHTML = ville;
    })
    .catch((err) => console.log(err));
  });
  


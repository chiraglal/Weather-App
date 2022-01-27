var button = document.querySelector(".submit");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var description = document.querySelector(".description");
var temperature = document.querySelector(".temperature");
button.addEventListener("click", function () {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=492363967b2ea8bdb263442ec13439e9"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var nameValue = data["name"];
      var temperatureValue = data["main"]["temp"];
      var descriptionValue = data["weather"][0]["description"];
      name.innerHTML = nameValue;
      temperature.innerHTML = temperatureValue;
      description.innerHTML = descriptionValue;
    })
    .catch((err) => alert("Enter the correct location"));
});

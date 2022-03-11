function toggleOn() {
  let listOn = document.querySelector(".list");
  let position = listOn.style.right;
  console.log(position);
  console.log(!position);
  console.log(listOn.style.right == 0 + "px");
  console.log(listOn.style.right == -800 + "px");
  console.log(listOn.style.right == 800 + "px");
  if (!position) {
    listOn.style.right = "0px";
  } else if (position == 0 + "px") {
    listOn.style.right = "-800px";
  } else {
    listOn.style.right = "0px";
  }
}

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", toggleOn);

let links = document.querySelectorAll(".links");
links.forEach(links => {
  links.addEventListener("click", () => {
    let listSet = document.querySelector(".list");
    listSet.style.right = "-800px";
  });
});

let textContainer = document.querySelector(".textContainer");
let weatherImg = document.getElementById(`main-image`);
document.getElementById("link2").addEventListener("click", function () {
  let url = "https://goweather.herokuapp.com/weather/Curitiba";
  fetch(url, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  })
    .then(res => {
      return res.json();
    })

    .then(res => {
      let bostonHead = document.getElementById("city");
      bostonHead.innerText = "City: BOSTON";

      console.log(res);
      let temperature = document.getElementById(`temperature`);
      let wind = document.getElementById(`wind`);
      let description = document.getElementById(`description`);
      let forecast = document.getElementById(`forecast`);

      temperature.innerHTML = `Current Temperature: <b>${res.temperature}<b>`;
      wind.innerHTML = `Wind: <b>${res.wind}<b>`;
      description.innerHTML = `Description: <b>${res.description}<b>`;
      forecast.innerHTML = `3-days Forecast: <b>${res.forecast[0].temperature} | ${res.forecast[1].temperature} | ${res.forecast[2].temperature} | <b>`;
    })
    .then(res => {
      let weatherText = document.getElementById("description");
      console.log(weatherText.innerText);
      if (weatherText.innerText == "Description: Partly cloudy") {
        weatherImg.setAttribute(
          "src",
          "./weather-images/partly-cloudy-image.jpeg"
        );

        console.log(true);
      } else if (weatherText.innerText == `Description: Sunny`) {
        weatherImg.src = "./weather-images/sunny-image.jpeg";
      } else if (weatherText.innerText == `Description: Raining`) {
        weatherImg.src = "./weather-images/raining-image.jpeg";
      } else {
        console.log(`failed`);
      }
    })

    .then(res => {
      console.log("success", res);
    })
    .catch(err => {
      console.log("failure", err);
    });
});
document.getElementById("link1").addEventListener("click", function () {
  let url2 = "https://goweather.herokuapp.com/weather/newyork";
  fetch(url2, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  })
    .then(res => {
      return res.json();
    })

    .then(res => {
      let yorkHead = document.getElementById("city");
      yorkHead.innerText = "City: New-York";

      console.log(res);
      let temperature = document.getElementById(`temperature`);
      let wind = document.getElementById(`wind`);
      let description = document.getElementById(`description`);
      let forecast = document.getElementById(`forecast`);

      temperature.innerHTML = `Current Temperature: <b>${res.temperature}<b>`;
      wind.innerHTML = `Wind: <b>${res.wind}<b>`;
      description.innerHTML = `Description: <b>${res.description}<b>`;
      forecast.innerHTML = `3-days Forecast: <b>${res.forecast[0].temperature} | ${res.forecast[1].temperature} | ${res.forecast[2].temperature} | <b>`;
    })
    .then(res => {
      let weatherText = document.getElementById("description");
      console.log(weatherText.innerText);
      if (weatherText.innerText == "Description: Partly cloudy") {
        weatherImg.src = "./weather-images/partly-cloudy-image.jpeg";
        console.log(true);
      } else if (weatherText.innerText == `Description: Sunny`) {
        weatherImg.src = "./weather-images/sunny-image.jpeg";
      } else if (weatherText.innerText == `Description: Raining`) {
        weatherImg.src = "./weather-images/raining-image.jpeg";
      } else {
        console.log(`failed`);
      }
    })

    .then(res => {
      console.log("success", res);
    })
    .catch(err => {
      console.log("failure", err);
    });
});
document.getElementById("link3").addEventListener("click", function () {
  let url3 = "https://goweather.herokuapp.com/weather/washington";
  fetch(url3, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  })
    .then(res => {
      return res.json();
    })

    .then(res => {
      let washingtonHead = document.getElementById("city");
      washingtonHead.innerText = "City: Washington";

      console.log(res);
      let temperature = document.getElementById(`temperature`);
      let wind = document.getElementById(`wind`);
      let description = document.getElementById(`description`);
      let forecast = document.getElementById(`forecast`);

      temperature.innerHTML = `Current Temperature: <b>${res.temperature}<b>`;
      wind.innerHTML = `Wind: <b>${res.wind}<b>`;
      description.innerHTML = `Description: <b>${res.description}<b>`;
      forecast.innerHTML = `3-days Forecast: <b>${res.forecast[0].temperature} | ${res.forecast[1].temperature} | ${res.forecast[2].temperature} | <b>`;
    })
    .then(res => {
      let weatherText = document.getElementById("description");
      console.log(weatherText.innerText);

      if (weatherText.innerText == "Description: Partly cloudy") {
        weatherImg.src = "./weather-images/partly-cloudy-image.jpeg";
        console.log(true);
      } else if (weatherText.innerText == `Description: Sunny`) {
        weatherImg.src = "./weather-images/sunny-image.jpeg";
      } else if (weatherText.innerText == `Description: heavy rain`) {
        weatherImg.src = "./weather-images/raining-image.jpeg";
      } else if (
        weatherText.innerText == "Description: Light rain with thunderstorm"
      ) {
        weatherImg.src = "./weather-images/raining-image.jpeg";
      } else {
        console.log(`failed`);
      }
    })

    .then(res => {
      console.log("success", res);
    })
    .catch(err => {
      console.log("failure", err);
    });
});

document.getElementById("link4").addEventListener("click", function () {
  let url3 = "https://goweather.herokuapp.com/weather/philadelphia";
  fetch(url3, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  })
    .then(res => {
      return res.json();
    })

    .then(res => {
      let phillyHead = document.getElementById("city");
      phillyHead.innerText = "City: Philadelphia";

      console.log(res);
      let temperature = document.getElementById(`temperature`);
      let wind = document.getElementById(`wind`);
      let description = document.getElementById(`description`);
      let forecast = document.getElementById(`forecast`);

      temperature.innerHTML = `Current Temperature: <b>${res.temperature}<b>`;
      wind.innerHTML = `Wind: <b>${res.wind}<b>`;
      description.innerHTML = `Description: <b>${res.description}<b>`;
      forecast.innerHTML = `3-days Forecast: <b>${res.forecast[0].temperature} | ${res.forecast[1].temperature} | ${res.forecast[2].temperature} | <b>`;
    })
    .then(res => {
      let weatherText = document.getElementById("description");
      console.log(weatherText.innerText);

      if (weatherText.innerText == "Description: Partly cloudy") {
        weatherImg.src = "./weather-images/partly-cloudy-image.jpeg";
        console.log(true);
      } else if (weatherText.innerText == `Description: Sunny`) {
        weatherImg.src = "./weather-images/sunny-image.jpeg";
      } else if (weatherText.innerText == `Description: heavy rain`) {
        weatherImg.src = "./weather-images/raining-image.jpeg";
      } else if (
        weatherText.innerText == "Description: Light rain with thunderstorm"
      ) {
        weatherImg.src = "./weather-images/raining-image.jpeg";
      } else {
        console.log(`failed`);
      }
    })

    .then(res => {
      console.log("success", res);
    })
    .catch(err => {
      console.log("failure", err);
    });
});

document.getElementById("link5").addEventListener("click", function () {
  let url3 = "https://goweather.herokuapp.com/weather/philadelphia";
  fetch(url3, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  })
    .then(res => {
      return res.json();
    })

    .then(res => {
      let chicagoHead = document.getElementById("city");
      chicagoHead.innerText = "City: Chicago";

      console.log(res);
      let temperature = document.getElementById(`temperature`);
      let wind = document.getElementById(`wind`);
      let description = document.getElementById(`description`);
      let forecast = document.getElementById(`forecast`);

      temperature.innerHTML = `Current Temperature: <b>${res.temperature}<b>`;
      wind.innerHTML = `Wind: <b>${res.wind}<b>`;
      description.innerHTML = `Description: <b>${res.description}<b>`;
      forecast.innerHTML = `3-days Forecast: <b>${res.forecast[0].temperature} | ${res.forecast[1].temperature} | ${res.forecast[2].temperature} | <b>`;
    })
    .then(res => {
      let weatherText = document.getElementById("description");
      console.log(weatherText.innerText);

      if (weatherText.innerText == "Description: Partly cloudy") {
        weatherImg.src = "./weather-images/partly-cloudy-image.jpeg";
        console.log(true);
      } else if (weatherText.innerText == `Description: Sunny`) {
        weatherImg.src = "./weather-images/sunny-image.jpeg";
      } else if (weatherText.innerText == `Description: heavy rain`) {
        weatherImg.src = "./weather-images/raining-image.jpeg";
      } else if (
        weatherText.innerText == "Description: Light rain with thunderstorm"
      ) {
        weatherImg.src = "./weather-images/raining-image.jpeg";
      } else {
        console.log(`failed`);
      }
    })

    .then(res => {
      console.log("success", res);
    })
    .catch(err => {
      console.log("failure", err);
    });
});

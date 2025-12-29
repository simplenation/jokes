let category = document.querySelector(".category");
let joke = document.querySelector(".joke");
let setup = document.querySelector(".setup");
let delivery = document.querySelector(".delivery");
let submit = document.querySelector(".getJoke");

let request = new XMLHttpRequest();
alert("Click the button to get a joke!");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  let url = "https://v2.jokeapi.dev/joke/Any";
  request.open("GET", url);
  request.send();
});

request.onload = function () {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);

    let response = JSON.parse(request.responseText);
    console.log(response);
    if (response.type === "single") {
      joke.innerHTML = response.joke;
      setup.style.display = "none";
      delivery.style.display = "none";
    } else {
      joke.innerHTML = "";
      setup.innerHTML = response.setup;
      delivery.innerHTML = response.delivery;
      setup.style.display = "block";
      delivery.style.display = "block";
    }
    category.innerHTML = response.category;
  }
};

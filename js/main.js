const flightDiv = document.querySelector("#flight");
const stayDiv = document.querySelector("#stay");

const flight = document.querySelector("[data-flight]");
const stay = document.querySelector("[data-stay]");

if (stay) {
  stay.classList.add("hide");
}

//Visa flygbokningar
flightDiv.addEventListener("click", () => {
  stay.classList.add("hide");

  flight.classList.contains("hide")
    ? flight.classList.remove("hide")
    : stay.classList.add("hide");
});

//Visa boendebokningar
stayDiv.addEventListener("click", () => {
  flight.classList.add("hide");

  stay.classList.contains("hide")
    ? stay.classList.remove("hide")
    : flight.classList.add("hide");
});

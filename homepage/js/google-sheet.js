const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const scriptUrl =
  "https://script.google.com/macros/s/AKfycbzRS2GTeNy82Q8ToVY6AcDjUMdySjngkEDmfatRZIR3u8Cagyx0hpeU5-568d6LndyU/exec";

const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptUrl, { method: "POST", body: new FormData(form) })
    .then((res) => {
      alert("Thank you for Submitting.");
      console.log(res);
    })
    .then(() => window.location.reload())
    .catch((error) => console.log(error, "error"));
});

console.log(form);

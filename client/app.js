$(document).ready(function(){


})
const url = "http://localhost:5000/camaro"
const form = document.querySelector('form')

form.addEventListener("findCar", sendPostRequest)

function sendPostRequest(event) {
  event.preventDefault
  console.log("hello");
}

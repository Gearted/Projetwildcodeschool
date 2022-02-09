const message =
  "Merci pour votre message";

document
  .getElementById("btn")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert(message);
  });

function Goober() {
  document.getElementById('goober').innerHTML = 'Bye'
}
function Goto(name) {
  switch (name) {
    case "home":
      window.location.href = "./index.html";
      break;
    case "prod":
      window.location.href = "./products.html";
      break;
    case "contact":
      window.location.href = "./contacts.html";
      break;
  }
}

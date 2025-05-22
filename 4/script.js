const button = document.getElementById("btn");
const name = document.getElementById("name");
const course = document.getElementById("course");
const year = document.getElementById("year");
const emer = document.getElementById("emer");
const address = document.getElementById("address");
const idCard = document.getElementById("div");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const details = document.createElement("p");
  details.innerHTML = `Name: ${name.value} <br /> Course: ${course.value}
  <br /> Year/Section: ${year.value}
  <br /> Emergency number: ${emer.value}
  <br /> Address: ${address.value}`;
  idCard.className = "PP";
  idCard.append(details);
  document.body.appendChild(idCard);
});

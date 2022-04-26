const homeDiv = document.getElementById("home");
const menuDiv = document.getElementById("menu");
const aboutUsDiv = document.getElementById("about-us");
const contactDiv = document.getElementById("contact");
menuDiv.addEventListener("click", () => menu());

let menu = () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.innerHTML = `
    <div id="content-container" class="content-container">
    <p class="category">Antipasti  20 Euro</p>
    <hr>
    <p class="description"> Cruditè di terra: carpaccio di manzo, carpaccio di scottona, carpaccio di equino </p>
    <p class="category">Primi  15 Euro</p>
    <hr>
    <p class="description"> Parmigiana di melanzane </p>
    <p class="category">Secondi  25 Euro</p>
    <hr>
    <p class="description"> T-Bone su pietra lavica </p>
  </div>
    `;

    homeDiv.classList.remove("clicked");
    menuDiv.classList.add("clicked");
    aboutUsDiv.classList.remove("clicked");
    contactDiv.classList.remove("clicked");

}

export default menu;
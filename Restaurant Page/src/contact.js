const homeDiv = document.getElementById("home");
const menuDiv = document.getElementById("menu");
const aboutUsDiv = document.getElementById("about-us");
const contactDiv = document.getElementById("contact");
contactDiv.addEventListener("click", () => contact());

let contact = () => {
    const content = document.getElementById("content");

    content.innerHTML = "";
    content.innerHTML = `
    <div id="content-container" class="content-container">
    <p class="our-story">Visita Il Ristorante<p><hr>
    <br><p class="story">
    2022 <br>
    Sammichele di Bari (BA)
    <br><br>
    <p class="story"><strong>Email:</strong> contact@ilristorante.com</p><br>
    <p class="story"><strong>Info e Prenotazioni:</strong> 555 5555555</p><br>
    <p class="story"><strong>Orari di apertura:</strong><br>
    Lunedì; 16.00 - 21.00<br>
    Martedì: CHIUSO<br>
    Mercoledì: 16.00 - 21.00<br>
    Giovedì: 16.00 - 21.00<br>
    Venerdì: 16.00 - 21.00<br>
    Sabato: 16.00 - 21.00<br>
    Domenica: 16.00 - 21.00</p>
    </div>`;

    homeDiv.classList.remove("clicked");
    menuDiv.classList.remove("clicked");
    aboutUsDiv.classList.remove("clicked");
    contactDiv.classList.add("clicked");
}

export default contact;
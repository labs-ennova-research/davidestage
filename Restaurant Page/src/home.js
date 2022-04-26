const homeDiv = document.getElementById("home");
const menuDiv = document.getElementById("menu");
const aboutUsDiv = document.getElementById("about-us");
const contactDiv = document.getElementById("contact");
homeDiv.addEventListener("click", () => home());

let home = () => {
    const content = document.getElementById("content");
    const title = document.createElement("div");
    const subTitle = document.createElement("div");

    content.innerHTML = "";

    title.classList = "title";
    subTitle.classList = "sub-title";

    title.textContent = "Il Ristorante";
    subTitle.textContent = "Braceria Sammichele di Bari";

    content.appendChild(title);
    content.appendChild(subTitle);

    homeDiv.classList.add("clicked");
    menuDiv.classList.remove("clicked");
    aboutUsDiv.classList.remove("clicked");
    contactDiv.classList.remove("clicked");
}

export default home;
import "./style.sass";
import "./reset.sass";
import homePage from "./home";
import hoursLoc from "./hours";
import menu from "./menu"
import { list } from "postcss";

const bgHeader = () => {
  const contentDiv = document.createElement("div");
  const overlay = document.createElement("div");
  const headline = document.createElement("header");
  const navbar = document.createElement("nav");
  const navlist = document.createElement("ul");
  const navItems = [
    ["home", homePage],
    ["hours & location", hoursLoc],
    ["menu", menu]
  ];
  const h1 = document.createElement("h1");

  h1.textContent = "rasa";

  contentDiv.classList.add("content");
  overlay.classList.add("overlay");
  headline.classList.add("headline");

  navItems.forEach(([text, fnCall]) => {
    const listItem = document.createElement("li");
    listItem.textContent = text;
    listItem.addEventListener("click", () => {
      contentDiv.remove();
      document.body.appendChild(bgHeader());
      document.body.appendChild(fnCall());
    });
    navlist.append(listItem);
  });

  navbar.classList.add("topnav");
  navbar.appendChild(navlist);

  headline.append(h1);
  headline.appendChild(navbar);

  overlay.append(headline);
  contentDiv.append(overlay);

  return contentDiv;
};

document.body.appendChild(bgHeader());
document.body.appendChild(homePage());

import _ from "lodash";
import { tabmenu } from "./tabmenu";
import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";

const content = document.getElementById("content");

//generate page for first time
content.appendChild(tabmenu.generate());
content.appendChild(home.generate());

//click on any of the tabmenu buttons switches to the corresponding tab
document.getElementById("Home").addEventListener("click", () => {
  let tab = document.getElementsByClassName("tab");
  content.replaceChild(home.generate(), tab.item(0));
});
document.getElementById("Menu").addEventListener("click", () => {
  let tab = document.getElementsByClassName("tab");
  content.replaceChild(menu.generate(), tab.item(0));
});
document.getElementById("About").addEventListener("click", () => {
  let tab = document.getElementsByClassName("tab");
  content.replaceChild(about.generate(), tab.item(0));
});

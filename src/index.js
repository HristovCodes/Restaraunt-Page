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
let homebtn = document.getElementById("Home");
homebtn.addEventListener("click", () => {
  let tab = document.getElementsByClassName("tab");
  content.replaceChild(home.generate(), tab.item(0));
  onButtonClick(homebtn);
});

let menubtn = document.getElementById("Menu");
menubtn.addEventListener("click", () => {
  let tab = document.getElementsByClassName("tab");
  content.replaceChild(menu.generate(), tab.item(0));
  onButtonClick(menubtn);
});

let aboutbtn = document.getElementById("About");
aboutbtn.addEventListener("click", () => {
  let tab = document.getElementsByClassName("tab");
  content.replaceChild(about.generate(), tab.item(0));
  onButtonClick(aboutbtn);
});

function onButtonClick(button) {
  button.classList.add("clicked");
  let allbuttons = document.getElementsByClassName("tabbutton");
  for (let i = 0; i < allbuttons.length; i++) {
    if (allbuttons.item(i) !== button) {
      allbuttons.item(i).classList.remove("clicked");
    }
  }
}

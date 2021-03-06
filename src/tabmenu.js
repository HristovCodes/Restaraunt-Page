//generate the tab menu (buttons you click to switch tabs)
const tabmenu = (() => {
  const generate = () => {
    const menus = ["Home", "Menu", "About"];
    let tabmenu = document.createElement("div");
    tabmenu.classList.add("tabmenu");

    for (let i = 1; i <= menus.length; i++) {
      let swaptabbtn = document.createElement("a");
      if (i === 1) swaptabbtn.classList.add("clicked");
      swaptabbtn.classList.add("tabbutton");
      swaptabbtn.id = menus[i - 1];
      swaptabbtn.innerText = menus[i - 1];
      tabmenu.appendChild(swaptabbtn);
    }
    return tabmenu;
  };

  return {
    generate
  };
})();

export { tabmenu };

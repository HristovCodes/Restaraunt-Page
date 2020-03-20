//generate menu tab
const menu = (() => {
  const name = "Menu";
  const generate = () => {
    let tab = document.createElement("div");
    tab.innerText = "Im " + name;
    tab.classList.add("tab");
    return tab;
  };
  return {
    generate
  };
})();

export { menu };

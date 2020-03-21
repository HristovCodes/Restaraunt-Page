//generate about tab
const about = (() => {
  const name = "About";
  const generate = () => {
    let tab = document.createElement("div");
    tab.innerText = name;
    tab.classList.add("tab");
    return tab;
  };
  return {
    generate
  };
})();

export { about };

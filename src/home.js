//generate home tab
const home = (() => {
  const name = "Home";
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

export { home };

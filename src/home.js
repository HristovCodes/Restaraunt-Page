//generate home tab
const home = (() => {
  const name = "Home";
  const generate = () => {
    let tab = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = "Indigo";
    let text = document.createElement("p");
    text.innerText =
      "For many years Indigo has been in the hearts of many that live in the city. We changed as our clients did. We lived as they did. We had fun as they had fun.";
    tab.classList.add("tab");
    tab.appendChild(title);
    tab.appendChild(text);
    return tab;
  };
  return {
    generate
  };
})();

export { home };

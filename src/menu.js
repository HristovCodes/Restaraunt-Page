//generate menu tab
const menu = (() => {
  const name = "Menu";
  const generate = () => {
    let tab = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = "Menu";
    tab.appendChild(title);
    tab.appendChild(_generateMenu());
    tab.classList.add("tab");
    return tab;
  };

  const _generateMenu = () => {
    let items = document.createElement("menu");
    items.classList.add("menu");
    let products = [
      {
        name: "Albacore with Crispy Onion",
        price: "$6.95"
      },
      {
        name: "Takoyaki",
        price: "$5.95"
      },
      {
        name: "Edamame",
        price: "$3.95"
      },
      {
        name: "Shishito Pepper",
        price: "$6.95"
      }
    ];
    products.forEach(element => {
      let text = document.createElement("h2");
      text.innerText = element.name;
      let price = document.createElement("p");
      price.innerText = element.price;
      items.appendChild(text);
      items.appendChild(price);
    });

    return items;
  };
  return {
    generate
  };
})();

export { menu };

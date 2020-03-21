//generate about tab
const about = (() => {
  const generate = () => {
    let tab = document.createElement("div");
    tab.classList.add("tab");
    let title = document.createElement("h1");
    title.innerText = "It’s More Fun In Indigo!";
    let text = document.createElement("h2");
    text.innerText =
      "Lively music, a vibrant crowd, inventive cocktails and the best sushi this side of California. You know when you’re in Indigo because there’s no other place like it. Order up the best sushi in town and delight in our signature rolls or amazing Japanese inspired cuisine. Whatever you choose, it’s all served with a big side of Anything Can Happen. So bring your friends or make new ones. Either way, you’re in for a great time.";
    tab.appendChild(title);
    tab.appendChild(text);
    tab.id = "about";
    return tab;
  };
  return {
    generate
  };
})();

export { about };

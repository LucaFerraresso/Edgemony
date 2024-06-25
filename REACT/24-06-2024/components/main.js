function getMainHTML() {
  const cardHTML = getCardHtml();
  return `<div class="main">
            <div class="card">
              <h2>title<h2>
              <p>body<p>
              <h2>id<h2>
            </div>
          </div>
  `;
}

function getCardHtml() {
  return `<div class="card">
            <h2>title<h2>
            <p>body<p>
            <h2>id<h2>
          </div>
  `;
}

export { getMainHTML };

let DATA = [];
const getCards = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const main = document.querySelector(".main");
  //console.log(container);
  const data = await response.json();
  //console.log(data);
  main.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    `<div class=card>
                                            <h2>${"title:"}${data[i].title}</h2>
                                            <p>${"body:"}${data[i].body}</p>
                                            <h2>${"id:"}${data[i].id}</h2>
                                            
                                            </div>`;
    DATA.push(data[i]);
    main.innerHTML += `<div class="card">
                                            <h2>${"title:"}${data[i].title}</h2>
                                            <h2><h2>${"body:"}${
      data[i].body
    }</h2>
                                            <h2><h2>${"id:"}${data[i].id}</h2>
                                            </div>`;
  }
};
console.log("risposta:", DATA);
getCards();

function getFooterHTML() {
  //const footerMenu = getFooterMenuHTML();
  const footerMenuHTML = getMenuHTML();

  return `
    <footer class="footer">
        <div class="container">
            <div class="wrapper">
                <div class="logo">Logo</div>
                <nav class="nav">
                    ${footerMenuHTML}
                </nav> 
            </div>
        </div>
    </footer>
    `;
}

function getMenuHTML() {
  const menuItems = [
    {
      label: "About us",
      children: [
        { label: "company info" },
        { label: "carrers" },
        { label: "altre cose" },
      ],
    },
    {
      label: "About us",
      children: [
        { label: "company info" },
        { label: "carrers" },
        { label: "altre cose" },
      ],
    },
  ];

  let menuItemsHTML = menuItems.map((item) => getMenuItemHTML(item)).join("");

  return `
    <ul class="menu">
        ${menuItemsHTML}
    </ul>
    `;
}

function getMenuItemHTML(options) {
  const { label, href = "#", children = [] } = options;
  const subItemsHTML = children.map((item) => getMenuItemHTML(item)).join("");
  const subMenuHTML = "<ul>" + subItemsHTML + "</ul>";

  return `<li class="item">
    <a href="${href}">${label}</a>
    ${children.length > 0 ? subMenuHTML : ""}
    </li>`;
}
export { getFooterHTML };

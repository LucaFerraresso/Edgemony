function getHeaderHTML() {
  const menuHTML = getMenuHTML();

  return `
    <header>
        <div class="container">
            <div class="wrapper">
                <div class="logo">Logo</div>
                ${menuHTML}
            </div>
        </div>
    </header>
    `;
}

function getMenuHTML() {
  const menuItems = [
    { label: "Home", href: "#" },
    { label: "About us", href: "#" },
  ];
  let menuItemsHTML = menuItems.map((item) => getMenuItemHTML(item)).join("");

  return `
    <nav class="nav">
        <ul class="list">
            ${menuItemsHTML}
        </ul>
    </nav>
    `;
}

function getMenuItemHTML(options = {}) {
  const { label, href = "#" } = options;
  return `
    <li class="item">
        <a href="${href}"> ${label}</a>
    </li>
    `;
}

export { getHeaderHTML };

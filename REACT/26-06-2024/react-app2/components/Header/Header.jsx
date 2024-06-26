import "./Header.css";

function Header(props) {
  const { brand, children, ...attrs } = props;

  console.log("props", props);

  return (
    <header {...attrs}>
      <div className="container">
        <div className="wrapper">
          <div className="logo">Logo - {brand.name}</div>
          <Menu />
          {children}
        </div>
      </div>
    </header>
  );
}

function Menu() {
  const items = [
    { label: "About us" },
    { label: "Blog", href: "https://google.it" },
    { label: "Shop" },
  ];

  return (
    <nav className="nav">
      <ul className="list">
        {items.map((item, index, array) => (
          <MenuItem
            key={`${item.label}-${index}`}
            label={item.label}
            href={item.href}
          />
        ))}
      </ul>
    </nav>
  );
}

function MenuItem(props) {
  const { label, href = "#" } = props;
  return (
    <li className="item">
      <a href={href}>{label}</a>
    </li>
  );
}

export { Header };

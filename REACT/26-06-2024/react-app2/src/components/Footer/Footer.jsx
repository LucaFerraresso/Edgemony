import "./Footer.css";

function Footer(props) {
  const { children, ...attrs } = props;

  console.log("props", props);
  console.log("children", children);
  console.log("attrs", attrs);

  return (
    <footer {...attrs}>
      <div className="container">
        <div className="wrapper">
          <div className="LOGO">CB10 - {children}</div>
          <MenuFooter />
        </div>
      </div>
    </footer>
  );
}

function MenuFooter(props) {
  const items = [
    { label: "Twitter" },
    { label: "Linkedin" },
    { label: "GitHub" },
  ];
  return (
    <nav className="nav">
      <ul className="list">
        {items.map((items, index, array) => (
          <MenuItem
            key={`${items.label}${items.href}`}
            label={items.label}
            href={items.href}
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

export { Footer };

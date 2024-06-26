import "./Header.css";

function Header(props) {
  const { children, ...attrs } = props;

  console.log("props", props);
  console.log("children", children);
  //class="header" e' fuori dal TAG, cioe' attrs
  //children sono gli elementi interni al tag
  //in questo caso la scritta "Edgemony"
  //con ...attrs intendo tutto quello che e' fuori
  console.log("attrs", attrs);

  return (
    <header {...attrs}>
      <div className="container">
        <div className="wrapper">
          <div className="LOGO">CB10 - {children}</div>
          <Menu />
        </div>
      </div>
    </header>
  );
}

function Menu(props) {
  const items = [
    { label: "About us" },
    { label: "Contacts" },
    { label: "Blog" },
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

export { Header };

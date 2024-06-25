function Header() {
  return (
    <Header>
      <div className="container">
        <div className="wrapper">
          <div className="logo">LOGO</div>
          <menuhtml />
        </div>
      </div>
    </Header>
  );
}

function menu() {
  return (
    <nav className="nav">
      <ul className="list">
        <MenuItem label={"About us"} />
        <MenuItem label={"Blog"} />
        <menuItemHtml label={"Contact"} />
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

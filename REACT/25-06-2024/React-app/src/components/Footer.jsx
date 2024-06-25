import React, { Children } from "react";

function Footer() {
  return (
    <Footer className="Footer">
      <div className="container">
        <div className="wrapper">
          <div className="logo">LOGO</div>
          <FooterMenu></FooterMenu>
        </div>
      </div>
    </Footer>
  );
}

function FooterMenu() {
  const menuItems = [
    {
      label: "About us",
      children: [{ label: "company" }, { label: "Careers" }, { label: "Docs" }],
    },
    {
      label: "SocialMedia",
      children: [
        { label: "Linkedin" },
        { label: "GitHub" },
        { label: "twitter" },
      ],
    },
  ];

  return (
    <ul className="menu">
      {menuItems.map((item, index) => (
        <FooterMenuItems key={index} item={item} />
      ))}
    </ul>
  );
}

function FooterMenuItems({ item }) {
  const { label, href = "#", children = [] } = item;
  return (
    <li className="item">
      <a href={href}>{label}</a>
      {children.length > 0 && (
        <ul>
          {children.map((child, index) => {
            <li key={index} className="item subitem">
              {child.label}
            </li>;
          })}
        </ul>
      )}
    </li>
  );
}

export { Footer };

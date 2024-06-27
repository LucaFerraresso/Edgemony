import "./Footer.css";

function Footer() {
  const items = [
    {
      label: "Linkedin",
      href: "www.linkedin.com",
    },
    {
      label: "GitHub",
      href: "www.github.com",
    },
    {
      label: "Email",
      href: "www.google.it",
    },
  ];

  return (
    <footer>
      <h2>Contattami</h2>

      {items.map((items) => (
        <FooterContent
          key={items.label}
          label={items.label}
          href={items.href}
        />
      ))}
    </footer>
  );
}

function FooterContent(props) {
  const { label, href = "#" } = props;

  // const attrs = props.Info[0].label;
  return (
    <>
      <a href={href}>{label}</a>
    </>
  );
}

export default Footer;

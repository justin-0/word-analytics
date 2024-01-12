import Background from "./Background";

function Header() {
  return (
    <header>
      <Background />
      <h1 className="first-heading">
        Tweet<span className="first-heading--thin">Analytics</span>
      </h1>
    </header>
  );
}

export default Header;

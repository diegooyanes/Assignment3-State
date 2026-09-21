import "./Header.css";

function Header({ storeName }) {
  return (
    <header className="header">
      <a className="header__brand" href="#">
        {storeName}
      </a>

      <nav className="header__nav" aria-label="Main navigation">
        <a href="#">Home</a>
        <a href="#products">Products</a>
        <a href="#about">Our Story</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="header__button" href="#products">
        Shop now
      </a>
    </header>
  );
}

export default Header;
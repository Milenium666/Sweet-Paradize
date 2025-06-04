import "./Header.css";
import basket from "../../images/header-basket.svg";

function Header() {
  return (
    <header className="header">
              <div className="header_sweet">Sweet</div>

      <nav className="header__content">
        <h1 className="header__logo">
          <a className="header__logo-link" href="/">Sweet Paradise</a>
        </h1>

        <ul className="header__info">
          <li><a href="/about" className="header__info-link">О нас</a></li>
          <li><a href="/catalog" className="header__info-link">Каталог</a></li>
          <li><a href="/reviews" className="header__info-link">Отзывы</a></li>
          <li><a href="/contacts" className="header__info-link">Контакты</a></li>
        </ul>

        <a className="header__basket-link" href="/cart" aria-label="Корзина">
          <img
            src={basket}
            alt="Корзина для покупок"
            className="header__basket"
          />
        </a>
      </nav>
    </header>
  );
}

export default Header;

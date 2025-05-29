
import "./Header.css";

import basket from "../../images/header-basket.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__content">
          <a className="header__logo-link" href="#">
            <h1 className="header__logo">Sweet Paradise</h1>
          </a>
          <ul className="header__info">
            <li className="header__info-list">О нас</li>
            <li className="header__info-list">Каталог</li>
            <li className="header__info-list">Отзывы</li>
            <li className="header__info-list">Контакты</li>
          </ul>

          <a className="header__basket-link" href="#">
            <img
              src={basket}
              alt="корзина для покупок"
              className="header__basket"
            />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

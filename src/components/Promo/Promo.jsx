import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__about">
        <h2 className="promo__title">Sweet Paradise</h2>
        <p className="promo__subtitle">Мы сделаем вашу жизнь слаще!</p>
        <div className="promo__group-button">
          <button className="promo__button" type="button">
            Выбрать десерт
          </button>
          <button className="promo__button promo__button_active" type="button">
            Создать свой
          </button>
        </div>
      </div>
    </section>
  );
}
export default Promo;

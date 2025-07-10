import "./Promo.css";

import Slider from '../Slider/Slider.jsx';
import cover from '../../images/cover-video.png'
import raspberry from '../../images/Malinka-bez-hvostika.png'

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



        <img src={cover} alt="картинка для видео" className="promo__image"/>
        <img src={raspberry} alt="raspberry" className="promo__raspberry"/>
        <Slider />
    </section>
  );
}
export default Promo;

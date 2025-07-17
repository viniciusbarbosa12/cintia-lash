import "./Gallery.css";

import Slider from "react-slick";
import trabalho1 from "../../assets/img1.png";
import trabalho2 from "../../assets/img3.png";
import trabalho3 from "../../assets/img4.png";
import trabalho4 from "../../assets/img5.png";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="gallery">
      <h2>Trabalhos Recentes</h2>
      <Slider {...settings}>
        <div>
          <img src={trabalho1} alt="Trabalho 1" />
        </div>
        <div>
          <img src={trabalho2} alt="Trabalho 2" />
        </div>
        <div>
          <img src={trabalho3} alt="Trabalho 3" />
        </div>
        <div>
          <img src={trabalho4} alt="Trabalho 4" />
        </div>
      </Slider>
    </section>
  );
};

export default Gallery;

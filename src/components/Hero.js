import { Carousel } from "react-bootstrap";
import hero from "./../assets/log.jpg";
import hero1 from "./../assets/hero.jpg";
import hero2 from "./../assets/hero1.jpg";
import hero3 from "./../assets/hero2.jpg";

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={hero} />
        <Carousel.Caption>
          <h3>SMK 01 Nusantara</h3>
          <p>Salah satu SMK dengan pendidikan terbaik di Indonesia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hero1} />
        <Carousel.Caption>
          <h3>SMK 01 Nusantara</h3>
          <p>Salah satu SMK dengan pendidikan terbaik di Indonesia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hero2} />
        <Carousel.Caption>
          <h3>SMK 01 Nusantara</h3>
          <p>Salah satu SMK dengan pendidikan terbaik di Indonesia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hero3} />
        <Carousel.Caption>
          <h3>SMK 01 Nusantara</h3>
          <p>Salah satu SMK dengan pendidikan terbaik di Indonesia</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;

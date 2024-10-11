import { FaCode } from "react-icons/fa";
import { DiStreamline } from "react-icons/di";
import { RiRobot2Line } from "react-icons/ri";
import { IoIosCloudOutline } from "react-icons/io";
import { v4 as uuid } from "uuid";

import "./home-page.css";

import { Card } from "../../molecules/Card/Card";
import { cards } from "../../../utils/Data";
import { Footer } from "../../organisms/Footer/Footer";
import dev from "../../../assets/dev.png";

export function HomePage() {
  return (
    <div className="container home">
      <section className="hero-section" id="home">
        <div className="hero-section__left">
          <div className="hero-section__special-text">
            Sebastian <br /> Horon
          </div>
          <div className="hero-section__paragraph">
            <h3>
              Full Stack Developer <br /> Java, Python, TypeScript and React
            </h3>
          </div>
        </div>
        <div className="hero-section__right">
          <div className="hero-section__image">
            <img src={dev} alt="hero image" />
            <div className="hero-section__image-half-round-shape"></div>
            <div className="social-links">
              <a href="">
                <FaCode />
              </a>
              <a href="">
                <RiRobot2Line />
              </a>
              <a href="">
                <IoIosCloudOutline />
              </a>
              <a href="">
                <DiStreamline />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="section__title">My Services</h2>
        <div className="cards">
          {cards?.map((card) => (
            <Card
              key={uuid()}
              icon={card?.icon}
              title={card?.title}
              features={card?.features}
            />
          ))}
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2 className="section__title">My Portfolio</h2>

        <div className="portfolio__grid">
          {/* <div className='portfolio__card'>
            <img src={Portfolio1} alt='portfolio 1' />
            <div className='portfolio__card-title'>Portfolio 1</div>
          </div> */}
        </div>
      </section>

      <div className="contact" id="contact">
        <h2 className=" section__title">Connect</h2>

        <Footer />
      </div>
    </div>
  );
}

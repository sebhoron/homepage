import { FaCode, FaPlay } from 'react-icons/fa';
import { DiStreamline } from "react-icons/di";
import { RiRobot2Line } from "react-icons/ri";
import { IoIosCloudOutline } from "react-icons/io";
import { v4 as uuid } from 'uuid';
import { useEffect, useRef } from 'react';

import './HomePage.css'
import { Card } from '../../card/Card';
import { cards } from '../../../utils/Data';

import Contact from '../../contact/Contact';

export function HomePage() {
  const skillRef = useRef(null!);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressbar();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(skillRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateProgressbar = () => {
    const progressBars = document.querySelectorAll<HTMLElement>('.skill__progress-line');

    progressBars.forEach((progressBar) => {
      const percent = progressBar.getAttribute('data-width');
      progressBar.style.width = `${percent}%`;
    });
  };
  return (
    <div className='container home'>
      <section className='hero-section' id='home'>
        <div className='hero-section__left'>
          <div className='hero-section__special-text'>
            Sebastian <br /> Horon
          </div>
          <div className='hero-section__paragraph'>
            <h3>
              Full Stack Developer <br /> Java, Python, TypeScript and React
            </h3>
          </div>
          <a href='/resume.pdf' download='resume.pdf' className='button'>
            Get Resume
          </a>

          <div className='video-link'>
            <div className='link'>
              <a href='https://www.youtube.com/watch?v=xvFZjo5PgG0'>
                <FaPlay />
              </a>
            </div>
            <span>Video Link</span>
          </div>
        </div>
        <div className='hero-section__right'>
          <div className='hero-section__image'>
            <img src='./dev.png' alt='hero image' />
            <div className='hero-section__image-half-round-shape'></div>
            <div className='social-links'>
              <a href=''>
                <FaCode />
              </a>
              <a href=''>
                <RiRobot2Line />
              </a>
              <a href=''>
                <IoIosCloudOutline />
              </a>
              <a href=''>
                <DiStreamline />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='services' id='services'>
        <h2 className='section__title'>My Services</h2>
        <div className='cards'>
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

      <section className='skill' id='skills' ref={skillRef}>
        <div className='skill__left'>
          <h2 className='section__title'>My Skills</h2>
        </div>
        <div className='skill__right'>
          <div className='skill__wrapper'>
            <div className='skill__tag'>Development</div>
            <div className='skill__box'>
              <div className='skill__progress-line' data-width='95'></div>
              <div className='skill__percentage'>95%</div>
            </div>
          </div>
          <div className='skill__wrapper'>
            <div className='skill__tag'>AI Engineering</div>
            <div className='skill__box'>
              <div className='skill__progress-line' data-width='90'></div>
              <div className='skill__percentage'>90%</div>
            </div>
          </div>
          <div className='skill__wrapper'>
            <div className='skill__tag'>Cloud</div>
            <div className='skill__box'>
              <div className='skill__progress-line' data-width='85'></div>
              <div className='skill__percentage'>85%</div>
            </div>
          </div>
        </div>
      </section>

      <section className='portfolio' id='portfolio'>
        <h2 className='section__title'>My Portfolio</h2>

        <div className='portfolio__grid'>
          {/* <div className='portfolio__card'>
            <img src={Portfolio1} alt='portfolio 1' />
            <div className='portfolio__card-title'>Portfolio 1</div>
          </div> */}
        </div>
      </section>


      <div className='contact' id='contact'>
        <h2 className=' section__title'>Connect</h2>

        <Contact />
      </div>
    </div>
  );
};

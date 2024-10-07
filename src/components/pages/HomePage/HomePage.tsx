import { FaFacebookF, FaPlay } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TiSocialLinkedin, TiSocialInstagram } from 'react-icons/ti';
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
              Full Stack Developer <br /> Specialised in Java, Python, TypeScript and React
            </h3>
          </div>
          <a href='/resume.pdf' download='resume.pdf' className='button'>
            Get Resume
          </a>

          <div className='video-link'>
            <div className='link'>
              <a href='https://youtu.be/m4MDt7UUu1w?si=MTugFpitro7vF1t5'>
                <FaPlay />
              </a>
            </div>
            <span>Video Link</span>
          </div>
        </div>
        <div className='hero-section__right'>
          <div className='hero-section__image'>
            <img src='/dev.png' alt='hero image' />
            <div className='hero-section__image-half-round-shape'></div>
            <div className='social-links'>
              <a href=''>
                <FaFacebookF />
              </a>
              <a href=''>
                <FaXTwitter />
              </a>
              <a href=''>
                <TiSocialLinkedin />
              </a>
              <a href=''>
                <TiSocialInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='services' id='services'>
        <h3 className='section__label'>My Services</h3>
        <h2 className='section__title'>Services Provided to my clients.</h2>
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
          <h3 className='section__label'>My Skills</h3>
          <h2 className='section__title'>My Specials skills are</h2>
          <a href='/resume.pdf' download={'resume.pdf'} className='button'>
            Get Resume
          </a>
        </div>
        <div className='skill__right'>
          <div className='skill__wrapper'>
            <div className='skill__tag'>Development</div>
            <div className='skill__box'>
              <div className='skill__progress-line' data-width='75'></div>
              <div className='skill__percentage'>75%</div>
            </div>
          </div>
          <div className='skill__wrapper'>
            <div className='skill__tag'>Design</div>
            <div className='skill__box'>
              <div className='skill__progress-line' data-width='85'></div>
              <div className='skill__percentage'>85%</div>
            </div>
          </div>
          <div className='skill__wrapper'>
            <div className='skill__tag'>Cloud</div>
            <div className='skill__box'>
              <div className='skill__progress-line' data-width='95'></div>
              <div className='skill__percentage'>95%</div>
            </div>
          </div>
        </div>
      </section>

      <section className='portfolio' id='portfolio'>
        <h3 className='section__label'>My Portfolio</h3>
        <h2 className='section__title'>My Complete Projects</h2>

        <div className='portfolio__grid'>
          {/* <div className='portfolio__card'>
            <img src={Portfolio1} alt='portfolio 1' />
            <div className='portfolio__card-title'>Portfolio 1</div>
          </div> */}
        </div>
      </section>

      <section className='testimonials' id='testimonials'>
        <h3 className='section__label'>Testimonials</h3>
        <h2 className=' section__title'>Satisfied Clients Say</h2>
        <div className='testimonials__wrapper'>

          <div className='testimonials__card'>
            <div className='testimonials__text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus, enim.
            </div>
            <div className='testimonials__author'>Blake</div>
            <div className='testimonials__author-title'>
              CEO Carrington Atlantic
            </div>
          </div>

          <div className='testimonials__card'>
            <div className='testimonials__text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus, enim.
            </div>
            <div className='testimonials__author'>Fallon</div>
            <div className='testimonials__author-title'>
              CEO Fallon Unlimited
            </div>
          </div>

          <div className='testimonials__card'>
            <div className='testimonials__text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus, enim.
            </div>
            <div className='testimonials__author'>Sam</div>
            <div className='testimonials__author-title'>CEO Van Kirk</div>
          </div>

          <div className='testimonials__card'>
            <div className='testimonials__text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus, enim.
            </div>
            <div className='testimonials__author'>Steven</div>
            <div className='testimonials__author-title'>
              CEO carrington foundation
            </div>
          </div>

          <div className='testimonials__card'>
            <div className='testimonials__text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus, enim.
            </div>
            <div className='testimonials__author'>Steve</div>
            <div className='testimonials__author-title'>CEO Dan Joe</div>
          </div>

        </div>
      </section>

      <div className='contact' id='contact'>
        <h3 className='section__label'>Contact</h3>
        <h2 className=' section__title'>Connect with us</h2>

        <Contact />
      </div>
    </div>
  );
};

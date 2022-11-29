import React from 'react'
import './portfolio.css'
import img1 from "../../assets/facebook.png";
import img2 from "../../assets/todo.png";
import img3 from "../../assets/tour-cards.png";
import img4 from "../../assets/reviews.png";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Works</h2>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="item-image">
            <img src={img1} alt="facebook" />
          </div>
          <h3>React Facebook Clone</h3>
          <div className="portfolio-cta">
            <a
              href="https://github.com/sandipsky/react-facebook-clone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/sandipsky"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="item-image">
            <img src={img2} alt="facebook" />
          </div>
          <h3>ToDo App</h3>
          <div className="portfolio-cta">
            <a
              href="https://github.com/sandipsky/todolist-django"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="item-image">
            <img src={img3} alt="facebook" />
          </div>
          <h3>Blog App</h3>
          <div className="portfolio-cta">
            <a href="https://github.com/sandipsky/skyblog" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="item-image">
            <img src={img4} alt="facebook" />
          </div>
          <h3>Ecommerce App</h3>
          <div className="portfolio-cta">
            <a
              href="https://github.com/sandipsky/ecommerce-django"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio
import About from './components/about/About'
import Header from './components/header/Header'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import './app.css'

function App() {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;

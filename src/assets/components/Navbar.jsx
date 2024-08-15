const navItems = ['About', 'Structure', 'Testimonials', 'Announcements'];
import { useState } from 'react';
import logo from '../icon/logo.png';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = function () {
    setIsOpen(is => !is);
  };

  return (
    <nav className={`nav collapsible${isOpen ? ' collapsible__expanded' : ''}`}>
      <div>
        <img className="nav__logo" src={logo} alt="MinT Logo" />
      </div>
      <ul className={`nav__items collapsible__content`}>
        {navItems.map((item, index) => (
          <li key={index} className={`nav__item`}>
            {' '}
            <a href={`#Section--${index + 1}`}>{item}</a>{' '}
          </li>
        ))}
      </ul>

      <button className="collapsible__btn btn nav__btn" onClick={handleMenu}>
        <span className="fa-solid fa-bars"></span>
      </button>
    </nav>
  );
}

export default Navbar;

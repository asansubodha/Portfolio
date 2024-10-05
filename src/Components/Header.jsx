import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 w-full h-full">
      <header
        className="flex justify-between items-center text-black py-6 px-8
      md:px-32 bg-white drop-shadow-md"
      >
        <a href="#home" className="flex gap-2 items-center">
          <img
            src="/src/assets/logo.png"
            alt="logo"
            className="w-10 h-10 hover:scale-105 transition-all rounded-3xl"
          />
          <span className="text-lg font-semibold hover:scale-105">Asan</span>
        </a>

        {/* Desktop Navigation */}
        <ul
          className="hidden xl:flex items-center gap-8 
        font-semibold text-base"
        >
          <li className="navlist">
            <a href="#home">Home</a>
          </li>
          <li className="navlist">
            <a href="#about">About</a>
          </li>
          <li className="navlist">
            <a href="#skills">Skills</a>
          </li>
          <li className="navlist">
            <a href="#projects">Projects</a>
          </li>
          <li className="navlist">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div
            className="absolute top-24 left-0 w-full bg-white
          flex flex-col items-center gap-6 font-semibold text-lg
          opacity-100 transition-opacity duration-300"
          >
            <li className="navlistmd">
              <a href="#home">Home</a>
            </li>
            <li className="navlistmd">
              <a href="#about">About</a>
            </li>
            <li className="navlistmd">
              <a href="#skills">Skills</a>
            </li>
            <li className="navlistmd">
              <a href="#projects">Projects</a>
            </li>
            <li className="navlistmd">
              <a href="#contact">Contact</a>
            </li>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;

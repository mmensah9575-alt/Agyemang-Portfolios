import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        {/* Logo 
                <div>
          <img src="/icons/headerlogo.png" className="headerlogo" alt="Logo" />
        </div>
        */}

        {/* Navigation */}
        <nav>
          <ul className="header-list">
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              <li className="list">Home</li>
            </a>

            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              <li className="list">About</li>
            </a>

            <a
              href="#achievements"
              className={activeSection === "achievements" ? "active" : ""}
            >
              <li className="list">Achievements</li>
            </a>

            <a
              href="#portfolio"
              className={activeSection === "portfolio" ? "active" : ""}
            >
              <li className="list">Pricing</li>
            </a>

            <a
              href="#news"
              className={activeSection === "news" ? "active" : ""}
            >
              <li className="list">Testimonials</li>
            </a>

            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              <li className="list">Contact Us</li>
            </a>
          </ul>
        </nav>

        {/* Quote button */}
        <a href="#contact" className="quote-btn">
          Get a quote
        </a>
      </div>
    </header>
  );
}

export default Header;

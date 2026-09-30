import { useState } from "react";

type Tab = "skills" | "experience" | "education";

function About() {
  const [activeTab, setActiveTab] = useState<Tab>("skills");

  return (
    <section className="about-container" id="about">

      {/* Image */}
      <div>
        <div className="mypic">
          <img src="/images/image-2.png" alt="About Me" />
        </div>
      </div>

      {/* Everything below must be inside about-section */}
      <div className="about-section">

        <h2 className="text-1">
          About <span>Me</span>
        </h2>

        <p className="text-2">
          It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.
          The point of using normal distribution of letters, as opposed
          to using 'Content here, content here', making it look like
          readable English.
        </p>

        {/* TAB BUTTONS */}
        <div className="tabs">

          <button
            className={`tab-btn ${
              activeTab === "skills" ? "active" : ""
            }`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>

          <button
            className={`tab-btn ${
              activeTab === "experience" ? "active" : ""
            }`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>

          <button
            className={`tab-btn ${
              activeTab === "education" ? "active" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>

        </div>


        {/* SKILLS */}
        {activeTab === "skills" && (
          <div className="tab-content active">

            <div className="skill">

              <div className="skill-title">
                <span>Development</span>
                <span>65%</span>
              </div>

              <div className="progress">
                <div
                  className="progress-bar blue"
                  style={{ width: "65%" }}
                ></div>
              </div>

            </div>


            <div className="skill">

              <div className="skill-title">
                <span>Design</span>
                <span>95%</span>
              </div>

              <div className="progress">
                <div
                  className="progress-bar yellow one"
                  style={{ width: "95%" }}
                ></div>
              </div>

            </div>


            <div className="skill">

              <div className="skill-title">
                <span>Branding</span>
                <span>80%</span>
              </div>

              <div className="progress">
                <div
                  className="progress-bar yellow"
                  style={{ width: "80%" }}
                ></div>
              </div>

            </div>

          </div>
        )}


        {/* EXPERIENCE */}
        {activeTab === "experience" && (
          <div className="tab-content active">

            <div className="experience-item">

              <h3>Web Developer</h3>

              <p className="date">
                2025 - Present
              </p>

              <p>
                I have experience building responsive websites using
                HTML, CSS, JavaScript and modern web technologies.
              </p>

            </div>


            <div className="experience-item">

              <h3>IT Intern</h3>

              <p className="date">
                2026
              </p>

              <p>
                Worked with computer systems, technical support,
                networking and basic software development.
              </p>

            </div>

          </div>
        )}


        {/* EDUCATION */}
        {activeTab === "education" && (
          <div className="tab-content active">

            <div className="education-item">

              <h3>BSc Computer Engineering</h3>
               <p className="date">
                2022 - Present
               </p>

               <p>
                Studying Computer Engineering with interests in
                software development, embedded systems and technology.
               </p>

            </div>


            <div className="education-item">

              <h3>Web Development</h3>

              <p>
                Learning HTML, CSS, JavaScript, TypeScript and React
                through practical projects.
              </p>

            </div>

          </div>
        )}

      </div>

    </section>
  );
}

export default About;
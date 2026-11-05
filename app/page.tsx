"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BASE_PATH = process.env.NODE_ENV === "production" ? "/dinusha" : "";

const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    subtitle: "DESIGN & USER INTERFACES",
    items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    number: "02",
    title: "Backend Development",
    subtitle: "SERVER-SIDE DEVELOPMENT",
    items: ["Node.js", "PHP", "Laravel"],
  },
  {
    number: "03",
    title: "Database Management",
    subtitle: "DATA & STORAGE",
    items: ["MySQL", "MongoDB"],
  },
  {
    number: "04",
    title: "Programming Languages",
    subtitle: "CORE PROGRAMMING",
    items: ["Java", "C#"],
  },
  {
    number: "05",
    title: "API & Integrations",
    subtitle: "APPLICATION CONNECTIVITY",
    items: ["RESTful APIs", "OpenAPI", "Nodemailer"],
  },
  {
    number: "06",
    title: "Development & QA Tools",
    subtitle: "WORKFLOW & AUTOMATION",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "XAMPP",
      "Selenium WebDriver",
    ],
  },
];

type Project = {
  number: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  description: string;
  stack: string[];
  details: string;
  github?: string;
  image: string;
  live?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "TEA LEAF",
    subtitle: "Tea Factory Management System",
    year: "2026",
    category: "Full-Stack Web Application",
    image: `${BASE_PATH}/projects/tea-leaf.png`,
    description:
      "Comprehensive tea factory management solution covering farmer records, leaf collection, production tracking, and inventory management.",
    stack: [
      "PHP 8.2",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "MVC Architecture",
    ],
    details:
      "Admin & Staff portals • Farmer record management • Leaf collection tracking • Automated payment calculations • Real-time stock updates • Monthly reporting • Password hashing & CSRF protection",
    github:
      "https://github.com/dinusha-madushan/tea-leaf-management-system",
  },
  {
    number: "02",
    title: "Room Rental System",
    subtitle: "Room Rental Management & Booking Platform",
    year: "2025 – 2026",
    category: "Academic Project",
    image: `${BASE_PATH}/projects/room-rental.png`,
    description:
      "Web-based room rental platform enabling customers to browse available rooms and administrators to manage listings efficiently.",
    stack: [
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "XAMPP",
    ],
    details:
      "User authentication • Room browsing & filtering • Booking management • Availability tracking • Admin dashboard • Responsive design • Database-driven operations",
    github:
      "https://github.com/dinusha-madushan/room-rental-system",
  },
  {
    number: "03",
    title: "PhotoShare",
    subtitle: "Social Photo Sharing & Content Management Web Application",
    year: "2026",
    category: "Web Application",
    image: `${BASE_PATH}/projects/photoshare-new.png`,
    description:
      "Feature-rich photo sharing platform with content management capabilities, API integration, and QR code functionality.",
    stack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "REST API",
      "QR Code",
      "Git",
    ],
    details:
      "Photo upload & management • CRUD operations • REST API integration • QR code generation • Content sharing • MySQL storage • Version control with Git",
    github: "https://github.com/dinusha-madushan/photo-share",
    live:
      "http://photoshareapp.infinityfreeapp.com/photoshare/license.php",
  },
];

const education = [
  {
    qualification: "HNDIT",
    title: "Higher National Diploma in Information Technology",
    institute:
      "Sri Lanka Advanced Technological Institute (SLIATE), Kandy",
    year: "2024 – Present",
  },
  {
    qualification: "G.C.E. A/L",
    title: "Advanced Level – Technology Stream",
    institute: "Peradeniya Central College",
    year: "2023",
  },
  {
    qualification: "G.C.E. O/L",
    title: "General Certificate of Education – Ordinary Level",
    institute: "Mahanama College, Kandy",
    year: "2020",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isProjectViewerOpen, setIsProjectViewerOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const activeProject = projects[activeProjectIndex];

  /* Detect the section currently visible on screen */
  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(
                a.boundingClientRect.top - window.innerHeight / 2
              ) -
              Math.abs(
                b.boundingClientRect.top - window.innerHeight / 2
              )
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* Reveal elements when they enter the viewport */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  /* Close the project viewer with the Escape key */
  useEffect(() => {
    if (!isProjectViewerOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsProjectViewerOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isProjectViewerOpen]);

  /* Open project viewer */
  const openProjectViewer = () => {
    setActiveProjectIndex(0);
    setIsProjectViewerOpen(true);
  };

  return (
    <>
      {/* SIDEBAR NAVIGATION */}

      <nav className="sidebar-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={
              activeSection === item.id
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <span className="sidebar-link-text">
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      <main>
        {/* HOME SECTION */}

        <section className="hero" id="home">
          <div className="hero-background-word">
            DEVELOPER
          </div>

          <header className="topbar">
            <a href="#home" className="logo">
              DM<span>.</span>
            </a>

            <a href="#contact" className="nav-contact">
              LET&apos;S TALK <span>↗</span>
            </a>
          </header>

          <div className="hero-content">
            <p className="hero-eyebrow">
              HELLO, I&apos;M
            </p>

            <h1>
              Dinusha
              <br />
              <span>Madushan.</span>
            </h1>

            <h2 className="hero-role">
              FULL-STACK DEVELOPER INTERN
            </h2>

            <p className="hero-description">
              I&apos;m a Full-Stack Developer Intern and HNDIT
              undergraduate passionate about building modern web
              applications, developing backend systems and creating
              useful digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button-primary">
                EXPLORE MY WORK <span>↗</span>
              </a>

              <a href="#about" className="button-secondary">
                MORE ABOUT ME
              </a>
            </div>

            <div className="hero-small-note">
              <span className="status-dot" />
              OPEN TO INTERNSHIP OPPORTUNITIES
            </div>
          </div>

          <div className="hero-portrait">
            <Image
              src={`${BASE_PATH}/profile-transparent.png`}
              alt="Portrait of Dinusha Madushan"
              width={1066}
              height={1224}
              priority
              sizes="(max-width: 700px) 95vw, 55vw"
              className="profile-image"
            />
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        {/* ABOUT SECTION — MY STORY ONLY */}

        <section className="section story-section" id="about">
          <div className="section-heading reveal">
            <p className="section-kicker">
              01 / GET TO KNOW ME
            </p>

            <h2>
              About<span className="green-dot">.</span>
            </h2>

            <p className="section-intro">
              My background, learning interests and professional goals.
            </p>
          </div>

          <div className="about-tabs reveal">
            <div className="tab-content">
              <div className="story-content story-video-layout">
                <div className="about-video-frame">
                  <video
                    className="about-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Software development workspace"
                  >
                    <source
                      src={`${BASE_PATH}/about-work.mp4`}
                      type="video/mp4"
                    />

                    Your browser does not support video playback.
                  </video>

                  <div className="about-video-label">
                    <span className="status-dot" />
                    SOFTWARE DEVELOPER / MY JOURNEY
                  </div>
                </div>

                <div className="story-text">
                  <p className="content-label">
                    MY JOURNEY
                  </p>

                  <h3>
                    Curious mind.
                    <br />
                    <span>Creative builder.</span>
                  </h3>

                  <p>
                    I&apos;m Dinusha Madushan, a motivated Higher
                    National Diploma in Information Technology
                    (HNDIT) undergraduate at the Sri Lanka Advanced
                    Technological Institute (SLIATE), Kandy.
                  </p>

                  <p>
                    I&apos;m passionate about building practical
                    software solutions, learning new technologies
                    and developing my skills in Software Engineering,
                    Quality Assurance, Web Development and Back-End
                    Development.
                  </p>

                  <p>
                    I&apos;m interested in opportunities where I can
                    apply my academic knowledge, gain real-world
                    experience and grow in a professional environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="manifesto-section reveal">
            <p className="section-kicker">
              MY DEVELOPMENT MINDSET
            </p>

            <h2>
              THINK <span>DIFFERENT.</span>
              <br />
              BUILD <span>BETTER.</span>
            </h2>

            <p>
              Good development is not only about writing code.
              It is about understanding problems, learning
              continuously and creating practical solutions.
            </p>
          </div>
        </section>

        {/* WHAT I CREATE */}

        <section className="section creation-section">
          <div className="section-heading reveal">
            <p className="section-kicker">
              WHAT I ENJOY
            </p>

            <h2>
              What I Create<span className="green-dot">.</span>
            </h2>

            <p className="section-intro">
              I enjoy turning ideas into useful applications,
              building reliable backend systems and improving
              software quality.
            </p>
          </div>

          <div className="creation-grid">
            {[
              {
                number: "01",
                title: "Full-Stack Development",
                description:
                  "Building responsive web applications by combining interactive frontend interfaces with backend functionality.",
              },
              {
                number: "02",
                title: "Backend & Database Development",
                description:
                  "Developing server-side features, managing databases and integrating APIs to create reliable applications.",
              },
              {
                number: "03",
                title: "Quality Assurance & Testing",
                description:
                  "Testing application functionality, preparing test cases, identifying bugs and improving software quality.",
              },
            ].map((item) => (
              <article
                className="creation-card reveal"
                key={item.number}
              >
                <span className="creation-number">
                  {item.number}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TECHNICAL SKILLS — QA-06 */}

        <section
          className="section skills-section skills-toolkit-section"
          id="skills"
        >
          <div className="section-heading skills-toolkit-heading reveal">
            <p className="section-kicker">
              02 / MY TECHNICAL TOOLKIT
            </p>

            <h2>
              Technologies
              <br />
              <span className="green-dot">I Work With.</span>
            </h2>

            <p className="section-intro">
              A collection of programming languages, frameworks,
              databases and development tools I use while building
              and exploring software applications.
            </p>

            <div className="toolkit-total">
              <span className="toolkit-total-number">06</span>
              <span>TECHNOLOGY CATEGORIES</span>
            </div>
          </div>

          <div className="tech-groups">
            {skillGroups.map((group) => (
              <article
                className="tech-group reveal"
                key={group.number}
              >
                <div className="tech-group-heading">
                  <span className="tech-group-number">
                    {group.number}
                  </span>

                  <div>
                    <p className="tech-group-subtitle">
                      {group.subtitle}
                    </p>

                    <h3>{group.title}</h3>
                  </div>
                </div>

                <div className="tech-items">
                  {group.items.map((item, index) => (
                    <span className="tech-item" key={item}>
                      <span className="tech-item-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="toolkit-bottom reveal">
            <span>CONTINUOUSLY LEARNING</span>
            <span>BUILDING · EXPLORING · IMPROVING</span>
          </div>
        </section>

        {/* PROJECTS — SINGLE BUTTON + PROJECT VIEWER */}

        <section className="section gallery-section" id="projects">
          <div className="section-heading reveal">
            <p className="section-kicker">
              03 / SELECTED WORK
            </p>

            <h2>
              My Projects<span className="green-dot">.</span>
            </h2>

            <p className="section-intro">
              Explore my work, practical applications and
              development experience through my selected projects.
            </p>
          </div>

          <div className="projects-entry reveal">
            <p>
              SELECTED PROJECTS / DEVELOPMENT WORK /
              PRACTICAL APPLICATIONS
            </p>

            <button
              type="button"
              className="project-open-button"
              onClick={openProjectViewer}
              aria-expanded={isProjectViewerOpen}
              aria-controls="project-viewer"
            >
              EXPLORE MY PROJECTS
              <span aria-hidden="true">↗</span>
            </button>
          </div>

          {isProjectViewerOpen && (
            <div
              className="project-viewer"
              id="project-viewer"
              aria-live="polite"
            >
              <div className="project-viewer-header">
                <span>PROJECT SHOWCASE</span>

                <span className="project-viewer-count">
                  {String(activeProjectIndex + 1).padStart(2, "0")}
                  {" / "}
                  {String(projects.length).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  className="project-close-button"
                  onClick={() => setIsProjectViewerOpen(false)}
                  aria-label="Close project showcase"
                >
                  CLOSE <span aria-hidden="true">×</span>
                </button>
              </div>

              <div
                className="project-viewer-layout"
                key={activeProject.number}
              >
                <div className="project-viewer-visual">
                  <Image
                    src={activeProject.image}
                    alt={`${activeProject.title} project screenshot`}
                    fill
                    sizes="(max-width: 780px) 90vw, 50vw"
                    className="project-viewer-image"
                  />

                  <span className="project-viewer-number">
                    {activeProject.number} / 03
                  </span>
                </div>

                <div className="project-viewer-content">
                  <p className="project-viewer-meta">
                    {activeProject.category} / {activeProject.year}
                  </p>

                  <h3>{activeProject.title}</h3>

                  <h4>{activeProject.subtitle}</h4>

                  <p className="project-viewer-description">
                    {activeProject.description}
                  </p>

                  <div className="project-viewer-stack">
                    {activeProject.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-viewer-details">
                    <p>KEY FEATURES & FUNCTIONALITY</p>
                    <span>{activeProject.details}</span>
                  </div>

                  <div className="project-viewer-links">
                    {activeProject.github && (
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        VIEW GITHUB ↗
                      </a>
                    )}

                    {activeProject.live && (
                      <a
                        href={activeProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LIVE APPLICATION ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-viewer-controls">
                <button
                  type="button"
                  onClick={() =>
                    setActiveProjectIndex((current) =>
                      Math.max(0, current - 1)
                    )
                  }
                  disabled={activeProjectIndex === 0}
                >
                  ← PREVIOUS
                </button>

                <span>
                  {String(activeProjectIndex + 1).padStart(2, "0")}
                  {" / "}
                  {String(projects.length).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setActiveProjectIndex((current) =>
                      Math.min(projects.length - 1, current + 1)
                    )
                  }
                  disabled={activeProjectIndex === projects.length - 1}
                >
                  NEXT PROJECT →
                </button>
              </div>
            </div>
          )}
        </section>

        {/* DEVELOPMENT PROCESS — QA-08: 04 */}

        <section className="section process-section y2k-process-section">
          <div className="process-banner-shell reveal">
            <div className="process-banner-left">
              <div className="process-banner-left-top">
                <span>04 / HOW I WORK</span>
                <span className="process-left-spark">✳</span>
              </div>

              <div className="process-banner-left-main">
                <p>THE CREATIVE</p>
                <h2>PROCESS<span>.</span></h2>
                <div className="process-outline-word">CREATE</div>
              </div>

              <div className="process-banner-left-bottom">
                <span>THINK / MAKE / REFINE</span>
                <span>MY APPROACH</span>
              </div>
            </div>

            <div className="process-banner-right">
              <video
                className="process-banner-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Software development process animation"
              >
                <source
                  src={`${BASE_PATH}/process-animation.mp4`}
                  type="video/mp4"
                />

                Your browser does not support video playback.
              </video>

              <div className="process-banner-shade" />

              <div className="process-banner-content">
                <div className="process-banner-meta">
                  <span>FROM CONCEPT TO CREATION</span>
                  <span>MY DEVELOPMENT APPROACH</span>
                </div>

                <div className="process-banner-title">
                  <p>EVERY GREAT BUILD STARTS SOMEWHERE.</p>

                  <h3>
                    IDEAS INTO
                    <br />
                    <span>IMPACT.</span>
                  </h3>
                </div>

                <div className="process-banner-bottom">
                  <span>CREATIVITY / DEVELOPMENT / QUALITY</span>
                  <span>SCROLL TO EXPLORE ↓</span>
                </div>
              </div>

              <span className="process-banner-sticker">
                BUILT
                <br />
                WITH
                <br />
                PURPOSE ✳
              </span>
            </div>
          </div>

          <div className="process-steps-grid reveal">
            <article className="process-step">
              <span>01</span>
              <h3>Understand</h3>
              <p>
                Analyze requirements, identify core problems and
                clarify project goals.
              </p>
            </article>

            <article className="process-step">
              <span>02</span>
              <h3>Plan</h3>
              <p>
                Design the solution, break tasks into milestones
                and select suitable technologies.
              </p>
            </article>

            <article className="process-step">
              <span>03</span>
              <h3>Build</h3>
              <p>
                Develop features, write clean code, implement
                database logic and integrate APIs.
              </p>
            </article>

            <article className="process-step">
              <span>04</span>
              <h3>Test & Improve</h3>
              <p>
                Test functionality, fix issues, review performance
                and refine the user experience.
              </p>
            </article>
          </div>
        </section>

        {/* EDUCATION — QA-08: 05 */}

        <section
          className="section journey-section education-showcase"
          id="education"
        >
          <div className="education-heading reveal">
            <div className="education-heading-main">
              <p className="education-kicker">
                05 / MY ACADEMIC JOURNEY
              </p>

              <h2>
                Education<span>.</span>
              </h2>

              <p className="education-intro">
                Every step of my education has helped me build
                knowledge, develop new skills and grow towards
                my professional goals.
              </p>
            </div>

            <div
              className="education-heading-side"
              aria-label="Learn, grow, create"
            >
              <span>LEARN</span>
              <span>GROW</span>
              <span>CREATE ↗</span>
            </div>
          </div>

          <div className="education-timeline-list">
            {education.map((item, index) => (
              <article
                className={`education-timeline-item education-item-${index + 1} reveal`}
                key={item.qualification}
              >
                <div className="education-timeline-marker">
                  <span>0{index + 1}</span>
                  <small>/ 03</small>
                </div>

                <p className="education-timeline-year">
                  {item.year}
                </p>

                <div className="education-timeline-content">
                  <p className="education-qualification">
                    {item.qualification}
                  </p>

                  <h3>{item.title}</h3>

                  <p className="education-institute">
                    {item.institute}
                  </p>
                </div>

                <p className="education-timeline-category">
                  {index === 0
                    ? "HIGHER EDUCATION"
                    : index === 1
                      ? "SECONDARY EDUCATION"
                      : "BASIC EDUCATION"}
                </p>

                <span
                  className="education-timeline-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </article>
            ))}
          </div>

          <div className="education-languages reveal">
            <div className="education-language-heading">
              <p>LANGUAGES</p>
              <h3>Communication.</h3>
            </div>

            <div className="education-language-list">
              <div className="education-language-item">
                <span className="language-number">01</span>
                <strong>Sinhala</strong>
                <span className="language-symbol">↗</span>
              </div>

              <div className="education-language-item">
                <span className="language-number">02</span>
                <strong>English</strong>
                <span className="language-symbol">↗</span>
              </div>
            </div>
          </div>

          <div className="education-footer reveal">
            <span>ALWAYS LEARNING. ALWAYS IMPROVING.</span>
            <span>MY JOURNEY CONTINUES ↗</span>
          </div>
        </section>

        {/* EXPERIENCE — QA-13: TWO CARDS ONLY */}

        <section
          className="section experience-section"
          id="experience"
        >
          <div className="section-heading reveal">
            <p className="section-kicker">
              06 / PRACTICAL EXPERIENCE
            </p>

            <h2>
              Experience<span className="green-dot">.</span>
            </h2>

            <p className="section-intro">
              Practical experience developed through academic
              and independent software projects, including
              development, implementation and problem-solving.
            </p>
          </div>

          <div className="experience-grid">
            {/* EXPERIENCE 01 */}

            <article className="experience-card reveal">
              <p className="experience-type">
                ACADEMIC PROJECT EXPERIENCE
              </p>

              <p className="experience-role-label">ROLE</p>

              <h3>Software Developer</h3>

              <div className="experience-meta">
                <div>
                  <span>COMPANY / CONTEXT</span>
                  <p>
                    Room Rental Management System · HNDIT Academic Project
                  </p>
                </div>

                <div>
                  <span>DURATION</span>
                  <p>2025 – 2026</p>
                </div>
              </div>

              <p className="experience-summary">
                Developed a database-driven room rental platform
                for room listings, customer bookings and
                administrator management.
              </p>

              <ul className="experience-responsibilities">
                <li>
                  Built room listing and availability features.
                </li>

                <li>
                  Implemented user authentication and booking workflows.
                </li>

                <li>
                  Developed admin functions for room and booking management.
                </li>
              </ul>
            </article>

            {/* EXPERIENCE 02 */}

            <article className="experience-card reveal">
              <p className="experience-type">
                INDEPENDENT PROJECT EXPERIENCE
              </p>

              <p className="experience-role-label">ROLE</p>

              <h3>Web Application Developer</h3>

              <div className="experience-meta">
                <div>
                  <span>COMPANY / CONTEXT</span>
                  <p>Tea Leaf Management System · PhotoShare</p>
                </div>

                <div>
                  <span>DURATION</span>
                  <p>2026</p>
                </div>
              </div>

              <p className="experience-summary">
                Developed independent applications focused
                on management workflows, content management
                and photo sharing functionality.
              </p>

              <ul className="experience-responsibilities">
                <li>
                  Developed farmer, leaf collection, production
                  and inventory management features.
                </li>

                <li>
                  Implemented photo uploads, CRUD operations
                  and content management.
                </li>

                <li>
                  Integrated REST APIs and QR code functionality.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* CV SECTION */}

        <section className="section resume-section">
          <div className="resume-content reveal">
            <div>
              <p className="section-kicker">
                WANT TO KNOW MORE?
              </p>

              <h2>
                Let&apos;s make
                <br />
                something<span> happen.</span>
              </h2>
            </div>

            <a
              href={`${BASE_PATH}/dinusha%20CV%20new%20.pdf`}
              className="button-primary"
              download="Dinusha-Madushan-CV.pdf"
            >
              DOWNLOAD MY CV <span>↓</span>
            </a>
          </div>
        </section>

        {/* CONTACT */}

        <section className="section connect-section" id="contact">
          <div className="section-heading reveal">
            <p className="section-kicker">
              07 / GET IN TOUCH
            </p>

            <h2>
              Let&apos;s Connect<span className="green-dot">.</span>
            </h2>

            <p className="section-intro">
              Open to internship opportunities in Software Engineering,
              Quality Assurance, Web Development, Back-End Development,
              Full-Stack Development and IT Support.
            </p>
          </div>

          <div className="contact-layout reveal">
            <div className="contact-main">
              <p className="contact-main-label">
                HAVE AN INTERNSHIP OR PROJECT OPPORTUNITY?
              </p>

              <a
                href="mailto:madushandinusha855@gmail.com"
                className="contact-email-btn"
              >
                SAY HELLO <span>↗</span>
              </a>

              <p className="contact-location">
                Hatharaliyadda, Kandy, Sri Lanka
              </p>
            </div>

            <div className="contact-links">
              {/* EMAIL */}
              <a
                href="mailto:madushandinusha855@gmail.com"
                className="contact-link-item"
              >
                <span
                  className="contact-link-icon email-icon"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>

                <span className="contact-link-text">
                  <small>EMAIL</small>
                  <strong>madushandinusha855@gmail.com</strong>
                </span>

                <span className="contact-link-arrow">↗</span>
              </a>

              {/* PHONE */}
              <a
                href="tel:+94768365842"
                className="contact-link-item"
              >
                <span
                  className="contact-link-icon phone-icon"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 3h3l2 5-2.2 1.6a14 14 0 0 0 4.6 4.6L16 12l5 2v3c0 1.1-.9 2-2 2C10.7 19 5 13.3 5 6c0-1.1.9-2 2-2Z" />
                  </svg>
                </span>

                <span className="contact-link-text">
                  <small>PHONE</small>
                  <strong>+94 76 836 5842</strong>
                </span>

                <span className="contact-link-arrow">↗</span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/dinusha-madushan-591446361"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <span
                  className="contact-link-icon linkedin-icon"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.96V9h2.97v9.5ZM6.45 7.7a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM19.05 18.5h-2.97v-4.62c0-1.1-.02-2.51-1.53-2.51-1.54 0-1.78 1.2-1.78 2.43v4.7H9.8V9h2.85v1.3h.04c.4-.75 1.37-1.53 2.82-1.53 3.01 0 3.57 1.98 3.57 4.56v5.17Z" />
                  </svg>
                </span>

                <span className="contact-link-text">
                  <small>PROFESSIONAL NETWORK</small>
                  <strong>LinkedIn</strong>
                </span>

                <span className="contact-link-arrow">↗</span>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/dinusha-madushan"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <span
                  className="contact-link-icon github-icon"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
                  </svg>
                </span>

                <span className="contact-link-text">
                  <small>CODE & PROJECTS</small>
                  <strong>GitHub</strong>
                </span>

                <span className="contact-link-arrow">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="footer">
          <a href="#home" className="logo">
            DM<span>.</span>
          </a>

          <p>DINUSHA MADUSHAN · SRI LANKA</p>

          <a href="#home">BACK TO TOP ↑</a>
        </footer>
      </main>
    </>
  );
}
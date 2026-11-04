"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    image: "/projects/tea-leaf.png",
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
    github: "https://github.com/dinusha-madushan/tea-leaf-management-system",
  },
  {
    number: "02",
    title: "Room Rental System",
    subtitle: "Room Rental Management & Booking Platform",
    year: "2025 – 2026",
    category: "Academic Project",
    image: "/projects/room-rental.png",
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
    github: "https://github.com/dinusha-madushan/room-rental-system",
  },
  {
    number: "03",
    title: "PhotoShare",
    subtitle: "Social Photo Sharing & Content Management Web Application",
    year: "2026",
    category: "Web Application",
    image: "/projects/photoshare-new.png",
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
    live: "http://photoshareapp.infinityfreeapp.com/photoshare/license.php",
  },
];

const education = [
  {
    qualification: "HNDIT",
    title: "Higher National Diploma in Information Technology",
    institute: "Sri Lanka Advanced Technological Institute (SLIATE), Kandy",
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

type TabName = "story" | "focus" | "progress";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeTab, setActiveTab] = useState<TabName>("story");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  // Detect the section currently visible on screen.
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

  // Reveal elements when they enter the viewport.
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
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* SIDEBAR NAVIGATION */}
      <nav className="sidebar-nav">
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
            <span className="sidebar-link-text">{item.label}</span>
          </a>
        ))}
      </nav>

      <main>
        {/* HOME SECTION */}

        <section className="hero" id="home">
          <div className="hero-background-word">DEVELOPER</div>

          <header className="topbar">
            <a href="#home" className="logo">
              DM<span>.</span>
            </a>

            <nav className="top-navigation">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={
                    activeSection === item.id
                      ? "top-link current"
                      : "top-link"
                  }
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a href="#contact" className="nav-contact">
              LET&apos;S TALK <span>↗</span>
            </a>
          </header>

          <div className="hero-content">
            <p className="hero-eyebrow">HELLO, I&apos;M</p>

            <h1>
              Dinusha
              <br />
              <span>Madushan.</span>
            </h1>

            <h2 className="hero-role">
              FULL-STACK DEVELOPER INTERN
            </h2>

            <p className="hero-description">
              I&apos;m a Full-Stack Developer Intern and HNDIT undergraduate
              passionate about building modern web applications, developing
              backend systems and creating useful digital experiences.
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
              src="/profile-transparent.png"
              alt="Portrait of Dinusha Madushan"
              width={1066}
              height={1224}
              preload
              sizes="(max-width: 700px) 95vw, 55vw"
              className="profile-image"
            />
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        {/* ABOUT SECTION */}

        <section className="section story-section" id="about">
          <div className="section-heading reveal">
            <p className="section-kicker">01 / GET TO KNOW ME</p>

            <h2>
              About<span className="green-dot">.</span>
            </h2>

            <p className="section-intro">
              My background, interests, projects and professional goals.
            </p>
          </div>

          <div className="about-tabs reveal">
            <div className="tab-buttons">
              <button
                className={
                  activeTab === "story"
                    ? "tab-button selected"
                    : "tab-button"
                }
                onClick={() => setActiveTab("story")}
              >
                <span>01</span> My Story
              </button>

              <button
                className={
                  activeTab === "focus"
                    ? "tab-button selected"
                    : "tab-button"
                }
                onClick={() => setActiveTab("focus")}
              >
                <span>02</span> My Focus
              </button>

              <button
                className={
                  activeTab === "progress"
                    ? "tab-button selected"
                    : "tab-button"
                }
                onClick={() => setActiveTab("progress")}
              >
                <span>03</span> Progress
              </button>
            </div>

            <div className="tab-content" key={activeTab}>
              {activeTab === "story" && (
                <div className="story-content story-video-layout">
                  <div className="about-video-frame">
                    <video
                      className="about-video"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label="Dinusha working on a laptop"
                    >
                      <source src="/about-work.mp4" type="video/mp4" />
                      Your browser does not support video playback.
                    </video>

                    <div className="about-video-label">
                      <span className="status-dot" />
                      SOFTWARE DEVELOPER / MY JOURNEY
                    </div>
                  </div>

                  <div className="story-text">
                    <p className="content-label">MY JOURNEY</p>

                    <h3>
                      Curious mind.
                      <br />
                      <span>Creative builder.</span>
                    </h3>

                    <p>
                      I&apos;m Dinusha Madushan, a motivated Higher National
                      Diploma in Information Technology (HNDIT) undergraduate
                      at the Sri Lanka Advanced Technological Institute
                      (SLIATE), Kandy.
                    </p>

                    <p>
                      I&apos;m passionate about building practical software
                      solutions, learning new technologies and developing
                      my skills in Software Engineering, Quality Assurance,
                      Web Development and Back-End Development.
                    </p>

                    <p>
                      I&apos;m currently seeking an internship where I can
                      apply my academic knowledge, gain real-world experience
                      and grow in a professional environment.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "focus" && (
                <div className="progress-content">
                  <div className="progress-stat">
                    <span>01</span>
                    <h3>Software Development</h3>
                    <p>
                      Learning to plan and build useful applications with
                      clear and user-friendly features.
                    </p>
                  </div>

                  <div className="progress-stat">
                    <span>02</span>
                    <h3>Quality Assurance</h3>
                    <p>
                      Checking application features, finding issues and
                      helping improve software quality.
                    </p>
                  </div>

                  <div className="progress-stat">
                    <span>03</span>
                    <h3>Problem Solving</h3>
                    <p>
                      Breaking tasks into steps, learning from problems and
                      improving solutions.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "progress" && (
                <div className="progress-content">
                  <div className="progress-stat">
                    <span>01</span>
                    <h3>Learning</h3>
                    <p>
                      Developing knowledge in programming, databases,
                      software engineering and quality assurance.
                    </p>
                  </div>

                  <div className="progress-stat">
                    <span>02</span>
                    <h3>Building</h3>
                    <p>
                      Applying technical knowledge through academic and
                      personal software projects.
                    </p>
                  </div>

                  <div className="progress-stat">
                    <span>03</span>
                    <h3>Growing</h3>
                    <p>
                      Seeking internship experience and opportunities to
                      improve professional skills.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="manifesto-section reveal">
            <p className="section-kicker">MY DEVELOPMENT MINDSET</p>

            <h2>
              THINK <span>DIFFERENT.</span>
              <br />
              BUILD <span>BETTER.</span>
            </h2>

            <p>
              Good development is not only about writing code. It is about
              understanding problems, learning continuously and creating
              practical solutions.
            </p>
          </div>
        </section>

        {/* WHAT I CREATE */}

        <section className="section creation-section">
          <div className="section-heading reveal">
            <p className="section-kicker">WHAT I ENJOY</p>

            <h2>
              What I Create<span className="green-dot">.</span>
            </h2>

            <p className="section-intro">
              I enjoy turning ideas into useful applications, building
              reliable backend systems and improving software quality.
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
              <article className="creation-card reveal" key={item.number}>
                <span className="creation-number">{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

              </article>
            ))}
          </div>
        </section>

        {/* TECHNICAL SKILLS */}

        <section
          className="section skills-section skills-toolkit-section"
          id="skills"
        >
          <div className="section-heading skills-toolkit-heading reveal">
            <p className="section-kicker">02 / MY TECHNICAL TOOLKIT</p>

            <h2>
              Technologies
              <br />
              <span className="green-dot">I Work With.</span>
            </h2>

            <p className="section-intro">
              A collection of programming languages, frameworks, databases
              and development tools I use while building and exploring
              software applications.
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

        {/* PROJECTS */}

        <section className="section gallery-section" id="projects">
          <div className="section-heading reveal">
            <p className="section-kicker">
              03 / ACADEMIC & PERSONAL WORK
            </p>

            <h2>
              My Projects<span className="green-dot">.</span>
            </h2>

            <p className="section-intro">
              Selected projects demonstrating my experience with application
              development, databases, APIs and software functionality.
            </p>
          </div>

          <div className="projects-showcase">
            {projects.map((project, index) => (
              <article
                className={`project-showcase reveal ${
                  index % 2 !== 0 ? "reverse" : ""
                }`}
                key={project.number}
              >
                <div className="project-showcase-visual">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="(max-width: 780px) 90vw, 55vw"
                    className="project-showcase-image"
                  />

                  <span className="project-showcase-number">
                    {project.number} / 03
                  </span>
                </div>

                <div className="project-showcase-content">
                  <p className="project-showcase-meta">
                    {project.category} / {project.year}
                  </p>

                  <h3>{project.title}</h3>

                  <h4>{project.subtitle}</h4>

                  <p className="project-showcase-description">
                    {project.description}
                  </p>

                  <div className="project-showcase-stack">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-showcase-links">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedProject(
                          expandedProject === project.number ? null : project.number
                        )
                      }
                      aria-expanded={expandedProject === project.number}
                      aria-controls={`case-study-${project.number}`}
                    >
                      {expandedProject === project.number
                        ? "HIDE CASE STUDY"
                        : "VIEW CASE STUDY"}{" "}
                      <span aria-hidden="true">
                        {expandedProject === project.number ? "−" : "↗"}
                      </span>
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        VIEW GITHUB <span>↗</span>
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LIVE APPLICATION <span>↗</span>
                      </a>
                    )}
                  </div>

                  {expandedProject === project.number && (
                    <div
                      className="case-study-panel"
                      id={`case-study-${project.number}`}
                    >
                      <p className="case-study-label">KEY FEATURES & WORK</p>
                      <p>{project.details}</p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DEVELOPMENT PROCESS - VIDEO BANNER ONLY */}

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
                aria-label="Silent 3D animation showing the software development process"
              >
                <source src="/process-animation.mp4" type="video/mp4" />
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
              <p>Analyze requirements, identify core problems, and clarify project goals with stakeholders.</p>
            </article>
            <article className="process-step">
              <span>02</span>
              <h3>Plan</h3>
              <p>Design system architecture, break tasks into milestones, and select appropriate technologies.</p>
            </article>
            <article className="process-step">
              <span>03</span>
              <h3>Build</h3>
              <p>Develop features iteratively, write clean code, implement database logic, and integrate APIs.</p>
            </article>
            <article className="process-step">
              <span>04</span>
              <h3>Test & Improve</h3>
              <p>Conduct thorough testing, fix bugs, optimize performance, and refine user experience.</p>
            </article>
          </div>
        </section>

        {/* EDUCATION - CLEAN TIMELINE */}

        <section
          className="section journey-section education-showcase"
          id="education"
        >
          <div className="education-heading reveal">
            <div className="education-heading-main">
              <p className="education-kicker">05 / MY ACADEMIC JOURNEY</p>

              <h2>
                Education<span>.</span>
              </h2>

              <p className="education-intro">
                Every step of my education has helped me build knowledge,
                develop new skills and grow towards my professional goals.
              </p>
            </div>

            <div className="education-heading-side" aria-label="Learn, grow, create">
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

                <p className="education-timeline-year">{item.year}</p>

                <div className="education-timeline-content">
                  <p className="education-qualification">{item.qualification}</p>
                  <h3>{item.title}</h3>
                  <p className="education-institute">{item.institute}</p>
                </div>

                <p className="education-timeline-category">
                  {index === 0
                    ? "HIGHER EDUCATION"
                    : index === 1
                      ? "SECONDARY EDUCATION"
                      : "BASIC EDUCATION"}
                </p>

                <span className="education-timeline-arrow" aria-hidden="true">↗</span>
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

        {/* PRACTICAL EXPERIENCE */}

        <section className="section experience-section" id="experience">
          <div className="section-heading reveal">
            <p className="section-kicker">06 / PRACTICAL EXPERIENCE</p>
            <h2>
              Experience<span className="green-dot">.</span>
            </h2>
            <p className="section-intro">
              Practical skills developed through academic work and personal projects.
            </p>
          </div>

          <div className="experience-grid">
            <article className="experience-card reveal">
              <p className="experience-type">ACADEMIC PROJECT WORK</p>
              <h3>Software Development Projects</h3>
              <p>
                Built database-driven web applications as part of my HNDIT
                learning, including room rental and management systems.
              </p>
            </article>

            <article className="experience-card reveal">
              <p className="experience-type">PERSONAL DEVELOPMENT</p>
              <h3>Web Development</h3>
              <p>
                Developed personal projects such as PhotoShare and my portfolio,
                focusing on useful features and responsive layouts.
              </p>
            </article>

            <article className="experience-card reveal">
              <p className="experience-type">TESTING PRACTICE</p>
              <h3>UI Review & Bug Fixing</h3>
              <p>
                Checked features and screen layouts, recorded UI issues and
                improved the website across desktop and mobile screens.
              </p>
            </article>
          </div>
        </section>

        {/* CV */}

        <section className="section resume-section">
          <div className="resume-content reveal">
            <div>
              <p className="section-kicker">WANT TO KNOW MORE?</p>

              <h2>
                Let&apos;s make
                <br />
                something
                <span> happen.</span>
              </h2>
            </div>

            <a href="/dinusha%20CV%20new%20.pdf" className="button-primary" download="Dinusha-Madushan-CV.pdf">
              DOWNLOAD MY CV <span>↓</span>
            </a>
          </div>
        </section>

        {/* CONTACT */}

        <section className="section connect-section" id="contact">
          <div className="section-heading reveal">
            <p className="section-kicker">07 / GET IN TOUCH</p>

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
              <p>HAVE AN INTERNSHIP OR PROJECT OPPORTUNITY?</p>

              <a href="mailto:madushandinusha855@gmail.com">
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
                <span className="contact-link-icon email-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M3 6.5C3 5.4 3.9 4.5 5 4.5H19C20.1 4.5 21 5.4 21 6.5V17.5C21 18.6 20.1 19.5 19 19.5H5C3.9 19.5 3 18.6 3 17.5V6.5Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M4 6L12 12.5L20 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
                <span className="contact-link-icon phone-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 3.5H8L10 8.5L7.5 10.5C8.6 12.9 10.5 14.8 13 16L15 13.5L20 15.5V18.5C20 19.6 19.1 20.5 18 20.5C9.4 20.5 3.5 14.6 3.5 6C3.5 4.6 4.1 3.5 5 3.5Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
                rel="noreferrer"
                className="contact-link-item"
              >
                <span className="contact-link-icon linkedin-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
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
                rel="noreferrer"
                className="contact-link-item"
              >
                <span className="contact-link-icon github-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.04c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.15 3.25 1.64.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.02.75 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
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
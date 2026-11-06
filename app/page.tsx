import Interactive3D from "./components/Interactive3DWrapper";
const exams = [
  {
    number: "01",
    title: "SAT",
    subtitle: "Scholastic Assessment Test",
    description: "Prepare smarter. Practice with purpose. Achieve your target score.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=85",
    subjects: ["Math", "Reading & Writing"],
  },
  {
    number: "02",
    title: "IELTS",
    subtitle: "International English Language Testing System",
    description: "Build your English proficiency and reach your desired band score.",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1000&q=85",
    subjects: ["Listening", "Reading", "Writing", "Speaking"],
  },
  {
    number: "03",
    title: "National Certificate",
    subtitle: "Uzbekistan National Assessment",
    description: "Strengthen your knowledge and prepare for national certification.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85",
    subjects: ["Practice tests", "Assessment"],
  },
];

const features = [
  {
    number: "01",
    icon: "↗",
    title: "Track your progress",
    description: "Understand your strengths, identify weaknesses, and measure your improvement.",
  },
  {
    number: "02",
    icon: "◷",
    title: "Real exam experience",
    description: "Practice in a focused environment with realistic timers and exam conditions.",
  },
  {
    number: "03",
    icon: "◎",
    title: "Learn with purpose",
    description: "Spend less time guessing what to study and more time improving.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="brand">
          <span className="brand-mark">L</span>
          <span className="brand-name">
            Lions <small>Study Room</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#exams">Examinations</a>
          <a href="#features">Why Lions</a>
          <a href="#about">About us</a>
          <a href="#resources">Resources</a>
        </div>

        <a href="/login" className="nav-button">
          Get started <span>→</span>
        </a>
      </nav>

      <section className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <Interactive3D />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            YOUR JOURNEY STARTS HERE
          </div>

          <h1>
            Prepare with <em>purpose.</em>
            <br />
            Achieve with <em>confidence.</em>
          </h1>

          <p className="hero-description">
            A smarter way to prepare for your next big exam.
            Everything you need to improve, practice and succeed — all in one place.
          </p>

          <div className="hero-actions">
            <a href="#exams" className="primary-button">
              Explore examinations <span>→</span>
            </a>
            <a href="#about" className="secondary-button">
              Discover Lions <span>↗</span>
            </a>
          </div>

          <div className="hero-note">
            <span>✦</span> Built for ambitious students.
          </div>
        </div>

        <div className="hero-bottom">
          <span>01 / INTRODUCTION</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="exams-section" id="exams">
        <div className="section-heading">
          <div>
            <span className="section-label">YOUR NEXT CHALLENGE</span>
            <h2>Choose your path<span>.</span></h2>
          </div>
          <p>
            Every great achievement begins with a decision.
            Choose your examination and start preparing.
          </p>
        </div>

        <div className="exam-grid">
          {exams.map((exam) => (
            <article className="exam-card" key={exam.number}>
              <div
                className="exam-image"
                style={{ backgroundImage: `url("${exam.image}")` }}
              />
              <div className="exam-shade" />

              <div className="exam-content">
                <div className="exam-card-top">
                  <span>{exam.number}</span>
                  <span className="exam-arrow">↗</span>
                </div>

                <div className="exam-main">
                  <span className="exam-subtitle">{exam.subtitle}</span>
                  <h3>{exam.title}</h3>
                  <p>{exam.description}</p>
                </div>

                <div className="subject-list">
                  {exam.subjects.map((subject) => (
                    <span key={subject}>{subject}</span>
                  ))}
                </div>

                <a href="#" className="exam-link">
                  Explore exam <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="features-intro">
          <span className="section-label">THE LIONS EXPERIENCE</span>
          <h2>
            Not just preparation.
            <br />
            <em>A better way to learn.</em>
          </h2>
          <p>
            Your time is valuable. Your preparation should be structured,
            meaningful and measurable.
          </p>
        </div>

        <div className="features-list">
          {features.map((feature) => (
            <article className="feature-item" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <span className="feature-icon">{feature.icon}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <span className="feature-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-section" id="about">
        <span className="section-label">THE NEXT CHAPTER IS YOURS</span>
        <h2>
          Your future
          <br />
          is <em>waiting.</em>
        </h2>
        <a href="#exams" className="primary-button">
          Start your journey <span>→</span>
        </a>
      </section>

      <footer className="footer">
        <a href="#" className="brand">
          <span className="brand-mark">L</span>
          <span className="brand-name">
            Lions <small>Study Room</small>
          </span>
        </a>
        <span>© 2026 Lions Study Room. Built for ambition.</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </main>
  );
}


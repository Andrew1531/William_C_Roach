import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Menu,
  Play,
  Video,
  X,
} from "lucide-react";
import "./WarmEditorial.css";
import PrivacyPolicy from "./PrivacyPolicy";

type Section = "home" | "videos" | "books" | "about";

const books = [
  {
    title: "Hermeneutics as Epistemology",
    subtitle: "A critical assessment of epistemological shifts in modern hermeneutics",
    url: "https://www.amazon.com/Hermeneutics-Epistemology-Critical-Assessment-Epistemological-ebook/dp/B013FA63RA/",
    image: "Hermeneutics.jpg",
    eyebrow: "Interpretation · Knowledge",
  },
  {
    title: "Defending Inerrancy",
    subtitle: "Co-authored with Norman L. Geisler; a defense of the historical doctrine of Scripture",
    url: "https://www.amazon.com/Defending-Inerrancy-Affirming-Scripture-Generation-ebook/dp/B006CQ8I46/",
    image: "Defending Inerrancy.jpg",
    eyebrow: "Scripture · Apologetics",
  },
  {
    title: "Sola Fide",
    subtitle: "The history and defense of the doctrine of justification by faith alone",
    url: "https://www.amazon.com/Sola-Fide-Primer-Doctrine-Justification/dp/1717317820/",
    image: "Sola_Fide.jpg",
    eyebrow: "Theology · Reformation",
  },
];

const videos = [
  {
    title: "Faith in the Crossfire",
    subtitle: "Series Premiere · Philosophical Theology",
    url: "https://www.youtube.com/embed/Gp3A2TqnJDc?si=ENbRqL2vDRt5UVzj",
  },
  {
    title: "The Logic of Inerrancy",
    subtitle: "Academic Lecture · Bibliology",
    url: "https://www.youtube.com/embed/Gp3A2TqnJDc?si=ENbRqL2vDRt5UVzj",
  },
];

const navItems: { id: Section; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "videos", label: "Lectures" },
  { id: "books", label: "Books" },
  { id: "about", label: "About" },
];

export function WarmEditorial() {
  const [active, setActive] = useState<Section>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(() => window.location.hash === "#privacy");

  useEffect(() => {
    document.title = privacyOpen ? "Privacy Policy | Dr. William C. Roach" : "Dr. William C. Roach";
    window.scrollTo(0, 0);
  }, [privacyOpen]);

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.slice(1) as Section;
      setPrivacyOpen(window.location.hash === "#privacy");
      setMenuOpen(false);
      if (navItems.some((item) => item.id === hash)) setActive(hash);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const navigate = (section: Section) => {
    setActive(section);
    setMenuOpen(false);
    window.location.hash = section;
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (privacyOpen) return <PrivacyPolicy />;

  return (
    <div className="warm-editorial" id="top">
      <header className="we-header">
        <div className="we-nav-inner">
          <a className="we-brand" href="#home" onClick={(event) => { event.preventDefault(); navigate("home"); }} aria-label="William C. Roach home">
            <span className="we-seal" aria-hidden="true">R</span>
            <span className="we-brand-copy">
              <strong>William C. Roach</strong>
              <small>Scholar · Apologist · Author</small>
            </span>
          </a>
          <nav className="we-desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                className={active === item.id ? "is-active" : ""}
                href={`#${item.id}`}
                onClick={(event) => { event.preventDefault(); navigate(item.id); }}
              >
                {item.label}
              </a>
            ))}
            <a href="https://drbillroach.substack.com/" target="_blank" rel="noopener noreferrer" className="we-substack-link">
              Substack <ExternalLink size={13} />
            </a>
          </nav>
          <button
            className="we-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="we-mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="we-mobile-nav" id="we-mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(event) => { event.preventDefault(); navigate(item.id); }}>
                <span>{item.label}</span><ArrowRight size={17} />
              </a>
            ))}
            <a href="https://drbillroach.substack.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
              <span>Substack</span><ExternalLink size={16} />
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="we-hero" id="home">
          <div className="we-hero-copy">
            <p className="we-kicker"><span /> Pursuing the objective Christian faith for the modern mind</p>
            <h1>Faith deserves<br />a <em>thoughtful</em> defense.</h1>
            <p className="we-hero-intro">
              William (Bill) C. Roach, Ph.D. writes and teaches at the meeting point of Christian theology,
              philosophy, and apologetics.
            </p>
            <div className="we-hero-actions">
              <a href="#videos" className="we-button we-button-dark" onClick={(event) => { event.preventDefault(); navigate("videos"); }}>
                Explore the lectures <ArrowDown size={16} />
              </a>
              <a href="#about" className="we-text-link" onClick={(event) => { event.preventDefault(); navigate("about"); }}>About Dr. Roach <ArrowRight size={15} /></a>
            </div>
            <div className="we-hero-note"><span className="we-note-rule" />Scholarship in service of the church</div>
          </div>
          <div className="we-hero-book">
            <a className="we-hero-book-link" href="https://www.amazon.com/dp/1947929372" target="_blank" rel="noopener noreferrer" aria-label="View Faith in the Crossfire on Amazon (opens in a new tab)">
              <img src={`${import.meta.env.BASE_URL}assets/faith-in-the-crossfire.png`} width={572} height={860} alt="Faith in the Crossfire: When a Dialectical Revolution Targets Christianity, by William C. Roach" fetchPriority="high" />
            </a>
            <a className="we-book-link" href="https://www.amazon.com/dp/1947929372" target="_blank" rel="noopener noreferrer">View book on Amazon <ArrowUpRight size={15} /></a>
          </div>
          <div className="we-featured-book-copy">
            <div>
              <p className="we-overline">Featured book</p>
              <h2>Faith in the <em>Crossfire</em></h2>
            </div>
            <p>Faith in the Crossfire explains this struggle with clarity and depth. William C. Roach traces the philosophical and theological development of dialectical thought, examines how it operates within contemporary culture and the church, and exposes its consequences for Christian doctrine and practice. He then presents a constructive defense of objective truth, sound reason, divine revelation, biblical authority, and the historic Christian faith. Readers will come away better equipped to recognize the ideas reshaping Christianity, understand where those ideas originated, and defend the truth revealed in Jesus Christ, the eternal Logos.</p>
          </div>
        </section>

        <div className="we-ribbon" aria-label="Areas of work">
          <div><span>01</span> Philosophical theology</div>
          <i />
          <div><span>02</span> Classical apologetics</div>
          <i />
          <div><span>03</span> Biblical studies</div>
        </div>

        <section className="we-feature section-anchor" id="videos">
          <div className="we-section-heading">
            <div>
              <p className="we-overline">Listen & consider</p>
              <h2>Ideas, in <em>conversation.</em></h2>
            </div>
            <p className="we-heading-aside">Lectures and conversations on questions at the heart of Christian belief.</p>
          </div>
          <div className="we-featured-video">
            <div className="we-feature-embed">
              <iframe
                src="https://www.youtube.com/embed/knIfelz9uxA"
                title="Featured apologetics lecture by Dr. William C. Roach"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <span className="we-video-index"><Play size={12} fill="currentColor" /> Featured lecture</span>
            </div>
            <div className="we-feature-caption">
              <div>
                <p className="we-overline">Featured from the archive</p>
                <h3>Defending the faith</h3>
                <p>Explore apologetics, philosophy, and theology through Dr. Roach’s lectures.</p>
              </div>
              <a href="https://www.youtube.com/results?search_query=William+C+Roach+apologetics" target="_blank" rel="noopener noreferrer" className="we-round-link" aria-label="Find more William C. Roach lectures on YouTube">
                <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
          <div className="we-video-list">
            {videos.map((video, index) => (
              <a className="we-video-card" key={video.title} href="https://www.youtube.com/@DrBillRoach" target="_blank" rel="noopener noreferrer" aria-label={`${video.title} — visit Dr. Roach’s YouTube channel (opens in a new tab)`}>
                <div className="we-small-embed">
                  <img src={`https://i.ytimg.com/vi/${new URL(video.url).pathname.split("/").pop()}/hqdefault.jpg`} alt="" loading="lazy" />
                </div>
                <div className="we-video-card-copy">
                  <span className="we-overline">Lecture 0{index + 1}</span>
                  <h3>{video.title}</h3>
                  <p>{video.subtitle}</p>
                </div>
                <Video className="we-video-icon" size={19} aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="we-books section-anchor" id="books">
          <div className="we-section-heading">
            <div>
              <p className="we-overline">Selected writing</p>
              <h2>Books for the <em>deep questions.</em></h2>
            </div>
            <p className="we-heading-aside">Published work on interpretation, Scripture, and the doctrine of justification.</p>
          </div>
          <div className="we-book-grid">
            {books.map((book, index) => (
              <article className="we-book-card" key={book.title}>
                <a className={`we-book-cover cover-${index + 1}`} href={book.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${book.title} on Amazon`}>
                   <img src={`${import.meta.env.BASE_URL}assets/${encodeURIComponent(book.image)}`} alt={`${book.title} book cover`} loading="lazy" decoding="async" />
                </a>
                <div className="we-book-info">
                  <p className="we-overline">{book.eyebrow}</p>
                  <h3>{book.title}</h3>
                  <p>{book.subtitle}</p>
                  <a href={book.url} target="_blank" rel="noopener noreferrer" className="we-book-link">View book <ArrowUpRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="we-about section-anchor" id="about">
          <div className="we-about-inner">
            <div className="we-about-title">
              <p className="we-overline">Scholarship & service</p>
              <h2>A life of<br /><em>serious inquiry.</em></h2>
              <span className="we-about-rule" />
              <p className="we-about-note">Faith is not a retreat from questions. It invites us to ask better ones.</p>
            </div>
            <div className="we-about-copy">
              <p className="we-about-lede">
                William (Bill) C. Roach, Ph.D. serves as Dean of the Norman L. Geisler School of Apologetics at Veritas International University and as Chair of Systematic Theology at Redeemer Seminary.
              </p>
              <p>
                A voice in philosophical theology and classical apologetics, Dr. Roach is an author, editor, and lecturer whose work engages the intellectual and cultural questions facing Christianity.
              </p>
              <p>
                His scholarship has been featured in <i>Christianity Today</i> and <i>WORLD Magazine</i>. He has also served as Past President of the International Society of Christian Apologetics.
              </p>
              <p>
                Through books, lectures, and teaching, he continues to defend the historic Christian faith with clarity and conviction.
              </p>
              <a className="we-button we-button-outline" href="https://drbillroach.substack.com/" target="_blank" rel="noopener noreferrer">
                Read on Substack <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </section>

        <section className="we-subscribe">
          <div className="we-subscribe-mark"><BookOpen size={20} /></div>
          <p className="we-overline">Join the conversation</p>
          <h2>Thoughtful faith.<br /><em>Delivered to your inbox.</em></h2>
          <p>Sign up to receive Dr. Roach’s essays and reflections on faith, theology, and the modern mind by email.</p>
          <a className="we-button we-button-dark" href="https://drbillroach.substack.com/subscribe" target="_blank" rel="noopener noreferrer">
            Subscribe by email <ArrowUpRight size={16} />
          </a>
          <p className="we-signup-note">Enter your email on Substack to subscribe. Unsubscribe anytime.</p>
        </section>
      </main>

      <footer className="we-footer">
        <a className="we-footer-brand" href="#home" onClick={(event) => { event.preventDefault(); navigate("home"); }}>
          <span className="we-seal" aria-hidden="true">R</span>
          <span><strong>William C. Roach</strong><small>Faith seeking understanding.</small></span>
        </a>
        <div className="we-footer-nav">
          <a href="#privacy">Privacy Policy</a>
          {navItems.map((item) => <a href={`#${item.id}`} key={item.id} onClick={(event) => { event.preventDefault(); navigate(item.id); }}>{item.label}</a>)}
          <a href="https://drbillroach.substack.com/" target="_blank" rel="noopener noreferrer">Substack <ExternalLink size={12} /></a>
        </div>
        <span className="we-copyright">
          William C. Roach
          <span className="we-credit">Designed and built by <a href="https://ladmedia.co" target="_blank" rel="noopener noreferrer">LAD MEDIA</a></span>
        </span>
      </footer>
    </div>
  );
}

export default WarmEditorial;
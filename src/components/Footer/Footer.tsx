import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <p className="copy">&copy; {new Date().getFullYear()} Yria Forján</p>
        <div className="links">
          <a
            href="https://github.com/yriaforjan"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yria-forjan-oliveira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

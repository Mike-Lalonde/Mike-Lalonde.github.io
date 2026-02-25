export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {year} Mike Lalonde</div>
        <div className="footer-links">
          <a href="https://github.com/Mike-Lalonde" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="dot">•</span>
          <a href="mailto:mlalonde@yrmindinsite.ca">Email</a>
        </div>
      </div>
    </footer>
  );
}
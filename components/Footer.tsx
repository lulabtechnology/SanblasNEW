export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <span>
          © {new Date().getFullYear()} Entre Almas Abiertas · Acompañamiento humano.
        </span>
        <br />
        <span>Presencia real · Escucha profunda · Camino acompañado.</span>
      </div>

      <div className="social-links">
        <a
          href="https://www.instagram.com/entrealmasabiertas?igsh=cjJrcGVsaGMwOTds"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/@entrealmasabierta?_r=1&_t=ZM-91oJsbYShul"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          TikTok
        </a>
        <a
          href="https://youtube.com/@entrealmasabiertas?si=yV0iEiIiv5-Z4paK"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          YouTube
        </a>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#fec2ca] text-[#222222] text-center py-6 text-sm mt-16">
      <p>Puedes encontrarme en</p>
      <div className="social-links">
        <a href="https://twitter.com/DaelynSkull" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://tumblr.com/daelynskull" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tumblr"></i>
        </a>
        <a href="https://bsky.app/profile/daelynskull.bsky.social" target="_blank" rel="noopener noreferrer">
          <img className="bluesky-icon" src="/bluesky-logo-icon.jpg" alt="Bluesky" />
        </a>
        <a href="https://threads.com/@daelynskull" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-threads"></i>
        </a>
        <a href="https://instagram.com/daelynskull" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:xdaelynskullx@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p>&copy; 2025 DaelynSkull.</p>
    </footer>
  )
}

// 🧙‍♂️💬 This entire file can be removed or customized to your liking!

import Navigation from './Navigation';

function Layout({ children }) {
  return (
    <div className="layout">
      <Navigation />
      <main className="container main-content">{children}</main>
      <footer className="footer">
        <div className="container footer-content">
          <p className="footer-text">Made with ♡</p>
          <a
            href="https://coff.ee/rhone"
            target="_blank"
            rel="noopener noreferrer"
            className="coffee-button"
          >
            Buy me a coffee ☕️
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

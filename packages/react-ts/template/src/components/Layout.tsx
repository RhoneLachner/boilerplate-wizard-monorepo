import { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): React.JSX.Element {
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

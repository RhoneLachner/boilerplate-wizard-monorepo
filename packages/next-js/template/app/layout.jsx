// 🧙‍♂️💬 This entire file can be customized to your liking!

import './globals.css'
import Navigation from '../components/Navigation'

export const metadata = {
  title: 'Next.js Boilerplate',
  description: 'A modern, production-ready Next.js boilerplate with best practices',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  )
}

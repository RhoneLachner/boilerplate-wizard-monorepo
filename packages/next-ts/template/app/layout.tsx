import './globals.css'
import Navigation from '../components/Navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js + TypeScript Boilerplate',
  description: 'A modern, production-ready Next.js + TypeScript boilerplate with best practices',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
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

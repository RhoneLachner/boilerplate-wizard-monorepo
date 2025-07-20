function Home() {
  const essentials = [
    'React 18.2.0',
    'Vite 5.0.0',
    'React Router 6.20.1',
    'Standard CSS 3',
    'Vitest 1.0.4',
    'Playwright 1.40.1',
    'ESLint 8.53.0',
    'Prettier 3.1.0',
  ];

  return (
    <div className="page-container">
      <div className="page-section">
        <h1 className="heading-large">BOILERPLATE WIZARD - React & JavaScript</h1>
        <p className="text-base text-grey max-width-md">
          A minimal React foundation with essential tools
        </p>
        <img
          src="/BPWizardLogo-react-vector.png"
          alt="Boilerplate Wizard Logo"
          className="logo"
        />
      </div>

      <div className="atmospheric-container">
        <h2 className="heading-small text-light-grey text-centered">STACK</h2>
        <ul className="list-spaced max-width-xs">
          {essentials.map((tech) => (
            <li key={tech} className="list-item">
              <span className="list-span">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;

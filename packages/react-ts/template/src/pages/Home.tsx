import React from 'react';

function Home(): React.JSX.Element {
  const essentials: string[] = [
    'React',
    'TypeScript',
    'Vite',
    'React Router',
    'Standard CSS 3',
    'Vitest',
    'Playwright',
    'ESLint',
    'Prettier',
  ];

  return (
    <div className="page-container">
      <div className="page-section">
        <h1 className="heading-large">
          BOILERPLATE WIZARD - React & TypeScript
        </h1>
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

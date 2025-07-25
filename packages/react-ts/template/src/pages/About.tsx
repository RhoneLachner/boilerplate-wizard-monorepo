// 🧙‍♂️💬 This entire page can be removed or customized to your liking!

import React from 'react';

interface Command {
  command: string;
  description: string;
}

function About(): React.JSX.Element {
  const features: string[] = [
    'Hot module replacement',
    'Modern ES6+ support',
    'TypeScript support',
    'Code linting with ESLint',
    'Code formatting with Prettier',
    'Unit testing with Vitest',
    'E2E testing with Playwright',
    'Routing with React Router',
    'Styling with Standard CSS',
  ];

  const starterCommands: Command[] = [
    {
      command: 'npm install',
      description: 'Installs project dependencies from package.json',
    },
    {
      command: 'npm run dev',
      description: 'Starts the development server with hot module replacement',
    },
  ];

  const devCommands: Command[] = [
    {
      command: 'npm run build',
      description: 'Bundles the app for production with TypeScript compilation',
    },
    {
      command: 'npm run preview',
      description: 'Serves the production build locally for preview',
    },
    { command: 'npm test', description: 'Runs unit tests using Vitest' },
    {
      command: 'npm run test:e2e',
      description: 'Executes end-to-end tests with Playwright',
    },
    {
      command: 'npm run lint',
      description: 'Lints the entire codebase with ESLint and TypeScript',
    },
    {
      command: 'npm run format',
      description: 'Applies code formatting using Prettier',
    },
    {
      command: 'npm run type-check',
      description: 'Checks TypeScript types without emitting files',
    },
  ];

  return (
    <div className="page-container">
      <div className="page-section-small">
        <h1 className="heading-large">ABOUT</h1>
      </div>

      <div className="atmospheric-container">
        <h2 className="heading-small text-light-grey text-centered">
          FEATURES
        </h2>
        <ul className="list-spaced max-width-sm">
          {features.map((feature) => (
            <li key={feature} className="list-item">
              <span className="list-span">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="page-section command-section">
        <h2 className="heading-small text-light-grey text-centered">
          RUN THESE COMMANDS TO GET STARTED:
        </h2>
        <ul className="list-spaced-short max-width-xs">
          {starterCommands.map(({ command, description }) => (
            <li key={command} className="list-item">
              <code className="list-span">{command}</code>: {description}
            </li>
          ))}
        </ul>
      </div>

      <div className="page-section command-section">
        <h2 className="heading-small text-light-grey text-centered">
          ADDITIONAL DEVELOPMENT COMMANDS:
        </h2>
        <ul className="list-spaced-short max-width-xs">
          {devCommands.map(({ command, description }) => (
            <li key={command} className="list-item">
              <code className="list-span">{command}</code>: {description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;

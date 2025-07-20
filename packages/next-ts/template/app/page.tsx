import React from 'react';

export default function Home(): React.JSX.Element {
    const essentials: string[] = [
        'Next.js 14.0.3',
        'TypeScript 5.0.2',
        'React 18.2.0',
        'App Router',
        'Standard CSS 3',
        'Jest Testing',
        'Playwright E2E',
        'ESLint 8.53.0',
        'Prettier 3.1.0',
    ];

    return (
        <div className="page-container">
            <div className="page-section">
                <h1 className="heading-large">
                    BOILERPLATE WIZARD - Next.js & TypeScript
                </h1>
                <p className="text-base text-grey max-width-md">
                    A modern Next.js + TypeScript foundation with essential
                    tools
                </p>
                <img
                    src="/BPWizardLogo-react-vector.png"
                    alt="Boilerplate Wizard Logo"
                    className="logo"
                />
            </div>

            <div className="atmospheric-container">
                <h2 className="heading-small text-light-grey text-centered">
                    STACK
                </h2>
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

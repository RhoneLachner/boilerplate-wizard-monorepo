// 🧙‍♂️💬 This entire page can be customized to your liking!

import React from 'react';
import Image from 'next/image';

export default function Home(): React.JSX.Element {
    const essentials: string[] = [
        'Next.js',
        'TypeScript',
        'React',
        'App Router',
        'Standard CSS 3',
        'Jest Testing',
        'Playwright E2E',
        'ESLint',
        'Prettier',
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
                <Image
                    src="/BPWizardLogo-nextjs-vector.png"
                    alt="Boilerplate Wizard Logo"
                    className="logo"
                    width={200}
                    height={200}
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

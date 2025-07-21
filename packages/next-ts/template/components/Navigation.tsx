// 🧙‍♂️💬 This entire file can be removed or customized to your liking!

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation(): React.JSX.Element {
    const pathname = usePathname();

    const isActive = (path: string): boolean => pathname === path;

    const linkClass = (path: string): string =>
        `nav-link ${isActive(path) ? 'text-white' : ''}`;

    return (
        <nav className="navigation">
            <div className="container nav-container">
                <span className="nav-brand">BP_WIZARD</span>
                <div className="nav-links">
                    <Link href="/" className={linkClass('/')}>
                        HOME
                    </Link>
                    <Link href="/about" className={linkClass('/about')}>
                        ABOUT
                    </Link>
                </div>
            </div>
        </nav>
    );
}

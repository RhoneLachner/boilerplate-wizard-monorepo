import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
}

export default function Button({
    children,
    onClick,
    variant = 'primary',
    disabled = false,
    ...props
}: ButtonProps): React.JSX.Element {
    const className = `button-base button-${variant}`;

    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

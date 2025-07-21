// 🧙‍♂️💬 This entire file can be removed or customized to your liking!

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
}

function Button({
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

export default Button;

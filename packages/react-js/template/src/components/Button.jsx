function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  ...props
}) {
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

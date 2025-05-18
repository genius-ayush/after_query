import React from 'react';
import ButtonSvg from "@/public/assets/svg/ButtonSvg";
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  px?: string;
  white?: boolean;
};

const Button: React.FC<ButtonProps> = ({ className, href, onClick, children, px, white }) => {
  const defaultTextColor = white ? 'text-n-8' : 'text-n-1';

  const classes = twMerge(
    `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${defaultTextColor}`,
    className
  );

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;

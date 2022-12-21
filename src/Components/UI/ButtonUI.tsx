import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './ButtonUI.module.scss';

interface ButtonUiProps {
  children: React.ReactNode;
  linkTo?: string;
  className?: string;
}

const ButtonUi: FC<ButtonUiProps> = ({ children, linkTo, className }) =>
  linkTo !== undefined ? (
    <Link className={className} to={linkTo}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );

const ButtonUiGreen: FC<ButtonUiProps> = ({ children, linkTo, className }) => (
  <ButtonUi
    className={className !== undefined ? className : styles.button_green}
    linkTo={linkTo}
  >
    {children}
  </ButtonUi>
);

const ButtonUITransparent: FC<ButtonUiProps> = ({
  children,
  linkTo,
  className,
}) => (
  <ButtonUi
    className={className !== undefined ? className : styles.button_transparent}
    linkTo={linkTo}
  >
    {children}
  </ButtonUi>
);

const ButtonUiWhite: FC<ButtonUiProps> = ({ children, linkTo, className }) => (
  <ButtonUi
    className={className !== undefined ? className : styles.button_white}
    linkTo={linkTo}
  >
    {children}
  </ButtonUi>
);

const ButtonUIHide: FC<ButtonUiProps> = ({ children, linkTo, className }) => (
  <ButtonUi
    className={className !== undefined ? className : styles.button_hide}
    linkTo={linkTo}
  >
    {children}
  </ButtonUi>
);

const buttons = {
  green: ButtonUiGreen,
  transparent: ButtonUITransparent,
  white: ButtonUiWhite,
  hide: ButtonUIHide,
};

const Button: FC<{
  text: string;
  linkTo?: string;
  element?: string;
}> = ({ text, linkTo, element }) => {
  const str = element !== undefined ? element : 'green';
  // @ts-ignore
  const ButtonElement = buttons[str];
  return <ButtonElement linkTo={linkTo}>{text}</ButtonElement>;
};

export default Button;

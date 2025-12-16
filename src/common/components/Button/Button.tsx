import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: Props) => {
  return <button {...rest}>{children}</button>;
};

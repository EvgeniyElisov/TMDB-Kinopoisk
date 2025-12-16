import styles from "./FooterLink.module.css";

type Props = {
  label: string;
  href: string;
  ariaLabel: string;
};

const openLink = (href: string) => {
  window.open(href, "_blank", "noopener,noreferrer");
};

export const FooterLink = ({ label, href, ariaLabel }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    openLink(href);
  };

  return (
    <a
      href={href}
      tabIndex={0}
      aria-label={ariaLabel}
      className={styles.link}
      onClick={handleClick}
    >
      {label}
    </a>
  );
};


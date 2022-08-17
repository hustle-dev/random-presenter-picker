import Link from 'next/link';
import { HeaderProps } from './Header.types';
import styles from './Header.module.css';

export const Header = ({ title }: HeaderProps) => {
  return (
    <h1 className={styles.title}>
      <Link href="/">
        <a>{title}</a>
      </Link>
    </h1>
  );
};

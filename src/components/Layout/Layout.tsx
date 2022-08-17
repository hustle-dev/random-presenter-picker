import { LayoutProps } from './Layout.types';
import styles from './Layout.module.css';
import { Header } from '..';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header title="랜덤 발표자" />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

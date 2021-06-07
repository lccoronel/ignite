import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import Active from '../Active';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <Active activeClassName={styles.active} href="/">
            <a className={styles.active}>Nome</a>
          </Active>
          <Active activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </Active>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
};
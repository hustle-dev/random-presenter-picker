import styles from './PresentersList.module.css';
import { PresentersListProps } from './PresentersList.types';

export const PresentersList = ({ presenters, setSelectedPresenter, setStatus }: PresentersListProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setSelectedPresenter((e.target as HTMLElement).textContent as string);
    setStatus('loading');

    setTimeout(() => {
      setStatus('complete');
    }, 3000);
  };

  return (
    <ul className={styles.selectSection}>
      {presenters?.map((name, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>
          <a role="button" className={styles.selectPresenter} onKeyPress={() => {}} onClick={handleClick} tabIndex={0}>
            {name}
          </a>
        </li>
      ))}
      <li>
        <a role="button" className={styles.selectPresenter} onKeyPress={() => {}} onClick={handleClick} tabIndex={0}>
          없음
        </a>
      </li>
    </ul>
  );
};

import { useEffect, useRef } from 'react';
import { ResultProps } from './Result.types';
import styles from './Result.module.css';

export const Result = ({ name, isContinuously }: ResultProps) => {
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (isContinuously) {
      setTimeout(() => {
        (h2Ref.current as HTMLHeadingElement).style.display = 'block';
        (h2Ref.current as HTMLHeadingElement).style.top = '6%';
      }, 4300);
    } else {
      setTimeout(() => {
        (h2Ref.current as HTMLHeadingElement).style.display = 'block';
      }, 2700);
    }
  }, []);

  return (
    <section className={styles.result}>
      <h2 className={styles.presenter} ref={h2Ref}>
        {name}
      </h2>
      {isContinuously ? (
        <video src="/videos/lineage2.mp4" autoPlay width="500" />
      ) : (
        <video src="/videos/lineage1.mp4" autoPlay width="500" />
      )}
    </section>
  );
};

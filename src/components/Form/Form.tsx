import { usePresenters } from 'contexts';
import { SyntheticEvent, useRef } from 'react';
import { useRouter } from 'next/router';
import { FormProps } from './Form.types';
import styles from './Form.module.css';

export const Form = ({ formTitle }: FormProps) => {
  const { presenters, setPresenters } = usePresenters();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const presenterName = (inputRef.current as HTMLInputElement).value.trim();

    if (!presenterName) {
      alert('이름을 제대로 입력해주세요');
      return;
    }

    if (presenters) {
      setPresenters([...presenters, presenterName]);
    } else {
      setPresenters([presenterName]);
    }

    (inputRef.current as HTMLInputElement).value = '';
  };

  const handleComplete = () => {
    if (!presenters) {
      alert('참여자를 1명 이상으로 입력해주세요');
      return;
    }

    localStorage.setItem('presenters', JSON.stringify(presenters));
    alert('발표자 데이터가 설정되었습니다.');

    router.push('/');
  };

  const handleReset = () => {
    setPresenters(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className={styles.subTitle}>{formTitle}</legend>
          <input type="text" className={styles.nameInput} placeholder="이름" ref={inputRef} />
          <button type="submit">입력</button>
        </fieldset>
      </form>
      <ul className={styles.nameList}>
        {presenters?.map((name, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button type="button" onClick={handleComplete}>
        완료
      </button>
      <button type="button" onClick={handleReset}>
        초기화
      </button>
    </>
  );
};

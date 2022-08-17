import { Loading, PresentersList, Result } from 'components';
import { usePresenters } from 'contexts';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import styles from 'styles/Choice.module.css';

export type StatusType = {
  loading: boolean;
  complete: boolean;
};

const Choice: NextPage = () => {
  const [status, setStatus] = useState<StatusType>({ loading: false, complete: false });
  const [selectedPresenter, setSelectedPresenter] = useState<string>('');
  const { presenters } = usePresenters();

  const presenterName = useMemo(() => {
    if (presenters) {
      const doubleNameArr = (presenters as string[]).concat(presenters as string[]);

      if (selectedPresenter !== '없음') {
        doubleNameArr.splice(doubleNameArr.indexOf(selectedPresenter), 1);
      }

      return doubleNameArr[Math.floor(Math.random() * doubleNameArr.length)];
    }
  }, [selectedPresenter]);

  return (
    <>
      <Head>
        <title>랜덤 발표자 - 발표자 뽑기</title>
      </Head>
      <section>
        {status.loading === false && status.complete === false && (
          <>
            <h2 className={styles.subTitle}>지난번 발표자를 선택해주세요</h2>
            <PresentersList presenters={presenters} setSelectedPresenter={setSelectedPresenter} setStatus={setStatus} />
          </>
        )}
        {status.loading === true && status.complete === false && (
          <>
            <h2 className={styles.subTitle}>랜덤으로 뽑는중입니다... 잠시만 기다려주세요</h2>
            <Loading />
          </>
        )}
        {status.loading === false && status.complete === true && (
          <>
            <h2 className={styles.subTitle}>발표자: ⭐️ {presenterName} ⭐️</h2>
            <Result />
          </>
        )}
      </section>
    </>
  );
};

export default Choice;

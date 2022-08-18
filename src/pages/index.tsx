import type { NextPage } from 'next';
import Head from 'next/head';
import styles from 'styles/Home.module.css';
import { usePresenters } from 'contexts';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { presenters, setPresenters } = usePresenters();
  const router = useRouter();

  const handleSetting = () => {
    if (presenters) {
      const result = window.confirm('이미 데이터가 존재합니다. 데이터를 새로 설정하시겠습니까?');

      if (result) {
        router.push('settings');
        setPresenters(null);
      }

      return;
    }
    router.push('settings');
  };

  const handleChoice = () => {
    if (presenters === null) {
      alert('데이터가 설정되지 않았습니다. \n데이터 설정 페이지로 이동합니다.');
      router.push('settings');

      return;
    }
    router.push('choice');
  };

  return (
    <>
      <Head>
        <title>랜덤 발표자</title>
        <meta name="description" content="랜덤 발표자를 위한 웹입니다." />
      </Head>
      <nav className={styles.navContainer}>
        <button type="button" onClick={handleSetting}>
          데이터 설정
        </button>
        <button type="button" onClick={handleChoice}>
          발표자 뽑기
        </button>
      </nav>
    </>
  );
};

export default Home;

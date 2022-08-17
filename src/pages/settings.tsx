import { Form } from 'components';
import Head from 'next/head';
import { NextPage } from 'next/types';

const Settings: NextPage = () => {
  return (
    <>
      <Head>
        <title>랜덤 발표자 - 데이터 설정</title>
      </Head>
      <section>
        <Form formTitle="스터디 참여자들을 입력해주세요." />
      </section>
    </>
  );
};

export default Settings;

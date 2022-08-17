import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from 'components';
import { PresentersProvider } from 'contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <PresentersProvider>
        <Component {...pageProps} />
      </PresentersProvider>
    </Layout>
  );
}

export default MyApp;

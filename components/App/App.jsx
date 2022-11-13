import {
  Header,
  Hero,
  About,
  Consultation,
  Experience,
  Feedback,
  Footer,
  Projects,
  Reputation,
  Services,
} from '..';

import Head from 'next/head';

const App = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero />
      <Reputation />
      <About />
      <Services />
      <Experience />
      <Consultation />
      <Projects />
      <Feedback />
    </>
  );
};

export default App;

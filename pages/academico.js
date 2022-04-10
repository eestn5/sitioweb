import React from 'react';
import Navbar from '../components/navbar/navbar';
import Head from 'next/head';
const Page = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Academico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active="Académico" />
      <section>
        <h1>Académico</h1>
      </section>
    </React.Fragment>
  );
}
export default Page;
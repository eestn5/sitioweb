import React from 'react';
import Navbar from '../components/navbar/navbar';
import Head from 'next/head';
const Page = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Institución</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active="Institución" />
      <section>
        <h1>Insitución</h1>
      </section>
    </React.Fragment>
  );
}
export default Page;
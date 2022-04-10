import React from 'react';
import Navbar from '../components/navbar/navbar';
import Head from 'next/head';
const Page = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Noticias</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active="Noticias" />
      <section>
        <h1>Noticias</h1>
      </section>
    </React.Fragment>
  );
}
export default Page;
import React from 'react';
import Navbar from '../components/navbar/navbar';
import Head from 'next/head';
const Page = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section>
        <h1>Login admin</h1>
      </section>
    </React.Fragment>
  );
}
export default Page;
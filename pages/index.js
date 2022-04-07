import React from 'react';
import Head from 'next/head';
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1>Estoy funcionando!</h1>
      </section>
    </React.Fragment>
  );
}

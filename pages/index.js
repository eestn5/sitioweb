import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active="Inicio" />
      <section>
        <h1>Estoy funcionando!</h1>
      </section>
    </React.Fragment>
  );
}

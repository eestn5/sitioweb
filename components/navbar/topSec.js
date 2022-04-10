import React from 'react';
import Link from 'next/link';
import { IoMail, IoCall, IoPerson } from "react-icons/io5";

const Top = () => {
  return (
    <section className="navbar__top">
      <Link href="mailto:consultas@eestn5mdp.edu.ar">
        <a className="navbar__top--element">
          <IoMail />
          consultas@eestn5mdp.edu.ar
        </a>
      </Link>
      <Link href="tel:+5411641234">
        <a className="navbar__top--element">
          <IoCall />
          +54 (223) 472-2408
        </a>
      </Link>
      <Link href="/login">
        <a className="navbar__top--element">
          <IoPerson />
          Login
        </a>
      </Link>
    </section>
  )
}
export default Top;
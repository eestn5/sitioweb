import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Logo = () => {
  return (
    <Link href="/">
      <a className="components__navbar--logo">
        <Image
          src="/logo.svg"
          width={50}
          height={50}
          layout="fixed"
          alt="Logo escuela"
          className="components__navbar--logo--img"
        />
      </a>
    </Link>
  );
}
export default Logo;
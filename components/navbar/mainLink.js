import React from 'react';
import Link from 'next/link';

const MainLink = ({ name, href, active }) => {
  return (
    <Link href={href}>
      <a className={`navbar__main--links ${active ? 'active' : ''}`}>
        {name}
      </a>
    </Link>
  );
}

export default MainLink;
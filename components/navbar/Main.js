import React from 'react';
import Logo from './logo';
import MainLink from './mainLink';
import Search from './search';
import { pages } from '../../constants/pages';
const Main = ({ active }) => {
  return (
    <section className="navbar__main">
      <Logo />
      <section className="navbar__main--elements">
        <section className="navbar__main--elements-cont">
          {
            pages.map(page => (
              <MainLink
                key={page[0]}
                name={page[0]}
                href={page[1]}
                active={page[0] === active}
              />
            ))
          }
        </section>
        <Search />
      </section>
    </section>
  );
}
export default Main;